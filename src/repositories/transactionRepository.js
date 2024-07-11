import TransactionSchema from "../schemas/Transaction.js";
import {
  insertOne,
  find,
  updateOne,
  findById,
  deleteOne,
} from "../config/config.js";

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

async function getById(id) {
  return await findById(id, "transactions");
}

async function update(id, body) {
  return await updateOne(id, body, "transactions");
}

async function remove(id) {
  return await deleteOne(id, "transactions");
}

export default { create, getAll, update, getById, remove };
