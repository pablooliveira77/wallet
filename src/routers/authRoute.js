import { Router } from 'express';
import authController from '../controllers/authController.js';

const authRouther = Router();

authRouther.post('/signup', authController.signup);

export default authRouther;