import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("Id do usuário não informado");

  const idTransactions = await transactionRepository.create({
    ...body,
    userId: id,
  });
  return transactionRepository.getById(idTransactions.insertedId);
}

async function getAll(id) {
  if (!id) throw new Error("Id do usuário não informado");

  return await transactionRepository.getAll({ userId: id });
}

async function update(id, body) {
  if (!id) throw new Error("Id da transação não informado");
  const findId = await transactionRepository.getById(id);

  if (!findId) throw new Error("Transação não encontrada");

  await transactionRepository.update(id, body);
  return transactionRepository.getById(id);
}

async function remove(id) {
  if (!id) throw new Error("Id da transação não informado");
  const findId = await transactionRepository.getById(id);

  if (!findId) throw new Error("Transação não encontrada");

  await transactionRepository.remove(id);
  return { message: "Transação removida com sucesso" };
}

export default { create, getAll, update, remove };
