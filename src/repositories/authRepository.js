import userSchema from "../schemas/User.js";
import { find, findById, insertOne } from "../config/config.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function create(data) {
  await userSchema.validateAsync(data);
  return await insertOne(data, "users");
}

async function findByEmail(email) {
  const user = await find({ email }, "users");
  return user[0] || false;
}

async function findId(id) {
  const user = await findById(id, "users");
  return user || false;
}

async function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "864000" });
}

export default { create, findByEmail, findId, generateToken };
