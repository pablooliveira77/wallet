import transactionRepository from '../repositories/transactionRepository.js';

async function create(body, id) {
    if (!id) throw new Error('Id do usuário não informado');

    return await transactionRepository.create({ ...body, userId: id });
}

async function getAll(id) {
    if (!id) throw new Error('Id do usuário não informado');

    return await transactionRepository.getAll({ userId: id });
}

export default { create, getAll }