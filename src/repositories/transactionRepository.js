import TransactionSchema from "../schemas/Transaction.js";
import { insertOne } from "../config/config.js";

async function create(data) {
  try {
    await TransactionSchema.validate(data);
    return await insertOne(data, "transactions");
  } catch (error) {
    return error;
  }
}

export default { create };
