import {body, param, validationResult} from 'express-validator';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/customErrors.js';
import mongoose from 'mongoose';
import imageModels from '../models/imageModels.js';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
    return [validateValues,
        (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          const errorMessages = errors.array().map((error) => error.msg);
            if (errorMessages[0].startsWith('No image')) {
                throw new NotFoundError(errorMessages)
            }
          if (errorMessages[0].startsWith('Not authorized')) {
            throw new UnauthorizedError('Not authorized to access this route')
          }
          throw new BadRequestError(errorMessages)
        }
        next();
      },
    ];
};

export const validateImageInput = withValidationErrors([
    body('title').notEmpty().withMessage('A title is required')
])

export const validateIDParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidID = mongoose.Types.ObjectId.isValid(value);
    if (!isValidID) throw new BadRequestError('Invalid MongoDB ID');

    const image = await imageModels.findById(value);
    if (!image) throw new NotFoundError(`No image with ID ${value}`);

    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === image.createdBy.toString();

    if (!isAdmin && !isOwner) {
      throw new UnauthorizedError('Not authorized to access this route');
    }
  }),
]);


export const validateRegisterInput = withValidationErrors([
  body('username').notEmpty().withMessage('A username is required').custom(async(value) => {
    const user = await User.findOne({ username: value });
    if (user) {
      throw new BadRequestError('Username already in use');
    }
  }),
  body('email').notEmpty().withMessage('An email is required').isEmail().withMessage('Invalid email format').custom(async(value)=>{
    const user = await User.findOne({ email: value });
    if (user) {
      throw new BadRequestError('Email already in use');
    }
  }),
  body('password').notEmpty().isLength({min:8}).withMessage('Password must be at least 8 characters long')
])


export const validateLoginInput = withValidationErrors([
  body('usernameOrEmail')
  .notEmpty().withMessage('A username or email is required')
  .custom((value) => {
    // If it's an email, check the format
    if (value.includes('@') && !/^\S+@\S+\.\S+$/.test(value)) {
      throw new Error('Invalid email format');
    }
    return true;
  }),
]);


export const validateUpdateUserInput = [
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .custom(async (username, { req }) => {
      const user = await User.findOne({ username });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('Username already in use');
      }
    }),

  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('Email already exists');
      }
    }),
];