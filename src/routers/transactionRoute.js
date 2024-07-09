import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validationSchemaMiddlewares.js";
import { createTransaction } from "../schemas/validation/createTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transaction",
  validateSchema(createTransaction),
  transactionController.create
);

transactionRouter.get("/transaction", transactionController.getAll);

export default transactionRouter;
