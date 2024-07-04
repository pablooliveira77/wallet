import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post("/transaction", transactionController.create);

transactionRouter.get("/transaction", transactionController.getAll);

export default transactionRouter;
