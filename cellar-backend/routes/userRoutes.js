import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { isAuth, generateToken } from '../utils.js';
import Validate from '../middlewares/validate.js';
import { Login, Logout, Register } from '../controllers/userController.js';
import { check } from 'express-validator';

const userRouter = express.Router();

userRouter.post(
  '/signup',
  check('email')
    .isEmail()
    .withMessage('Enter a valid email address')
    .normalizeEmail(),
  check('first_name')
    .not()
    .isEmpty()
    .withMessage('Your first name is required')
    .trim()
    .escape(),
  check('last_name')
    .not()
    .isEmpty()
    .withMessage('Your last name is required')
    .trim()
    .escape(),
  check('password')
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage('Must be at least 5 characters long'),
  Validate,
  Register
);

userRouter.post(
  '/signin',
  check('email')
    .isEmail()
    .withMessage('Enter a valid email address')
    .normalizeEmail(),
  check('password').not().isEmpty(),
  Validate,
  Login
);

export default userRouter;
