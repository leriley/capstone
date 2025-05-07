import { Router } from 'express';
const router = Router();

// This connects URL path to the right functions from imageController js
import { 
    getAllImages,
    getAllUserImages, 
    getImage, 
    createImage, 
    updateImage, 
    deleteImage 
} from '../controllers/imageController.js';

import { validateImageInput, validateIDParam } from '../middleware/validationMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

router.route('/')
  .get(getAllImages)
  .post(upload.single('image'), createImage);


router.route('/user-images')
  .get(getAllUserImages);


router.route('/:id')
  .get(validateIDParam, getImage)
  .patch(validateIDParam, updateImage)
  .delete(validateIDParam, deleteImage);

export default router;
