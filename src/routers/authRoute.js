import { Router } from 'express';
import authController from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const authRouther = Router();

authRouther.post('/signup', authController.signup);

authRouther.post('/signin', authController.signin);

authRouther.get('/me', authMiddleware, authController.userLogged);

export default authRouther;