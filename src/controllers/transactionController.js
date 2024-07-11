import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (error) {
    return res.status(409).send(error.message);
  }
}

async function getAll(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const transactions = await transactionService.getAll(id);
    return res.send(transactions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedTransaction = await transactionService.update(id, body);
    return res.status(200).send(updatedTransaction);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function remove(req, res) {
  const { id } = req.params;

  try {
    const deletedTransaction = await transactionService.remove(id);
    return res.status(200).send(deletedTransaction);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default { create, getAll, update, remove };
