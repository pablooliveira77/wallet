import { Router } from 'express';
import transactionController from '../controllers/transactionController.js';

const transactionRouther = Router();

transactionRouther.post('/transaction', transactionController.create);

export default transactionRouther;