import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

export async function Register(req, res) {
 try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).json({
        status: 'failed',
        data: [],
        message: 'It seems you already have an account, please log in instead.',
      });
    const newUser = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      code: 500,
      data: [],
      message: 'Internal Server Error',
    });
  }
  res.end(); 
}

export async function Login(req, res) {
  // Get variables for the login process
  const { email } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user)
      return res.status(401).json({
        status: 'failed',
        data: [],
        message:
          'Invalid email or password. Please try again with the correct credentials.',
      });
    // if user exists
    // validate password
    const isPasswordValid = await bcrypt.compare(
      `${req.body.password}`,
      user.password
    );
    // if not valid, return unathorized response
    if (!isPasswordValid)
      return res.status(401).json({
        status: 'failed',
        data: [],
        message:
          'Invalid email or password. Please try again with the correct credentials.',
      });
    // return user info except password
    res.status(200).send({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      code: 500,
      data: [],
      message: 'Internal Server Error',
    });
  }
  res.end();
}

export function Logout(req, res) {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
}
