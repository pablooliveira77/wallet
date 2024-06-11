import { Router } from 'express';
import authController from '../controllers/authController.js';

const authRouther = Router();

authRouther.post('/signup', authController.signup);

authRouther.post('/signin', authController.signin);

export default authRouther;