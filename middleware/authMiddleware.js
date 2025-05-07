import { UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    console.log("No token found in cookies");
    throw new UnauthenticatedError("Authentication invalid");
  }

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    console.log("Authenticated user:", req.user); 
    next(); 
  } catch (error) {
    console.log("Error verifying token:", error);
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route')
        }
    console.log(roles);
    next();
    };
};