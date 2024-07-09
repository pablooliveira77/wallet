import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validationSchemaMiddlewares.js";
import { createUser } from "../schemas/validation/createUser.js";
import { authUser } from "../schemas/validation/authUser.js";

const authRouther = Router();

authRouther.post("/signup", validateSchema(createUser), authController.signup);

authRouther.post("/signin", validateSchema(authUser), authController.signin);

authRouther.get("/me", authMiddleware, authController.userLogged);

export default authRouther;
