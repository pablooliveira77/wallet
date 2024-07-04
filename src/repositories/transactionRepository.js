import TransactionSchema from "../schemas/Transaction.js";
import { insertOne, find } from "../config/config.js";

async function create(data) {
  try {
    await TransactionSchema.validate(data);
    return await insertOne(data, "transactions");
  } catch (error) {
    return error;
  }
}

async function getAll(id) {
  return await find(id, "transactions");
}

export default { create, getAll };
