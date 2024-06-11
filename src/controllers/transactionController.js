import transactionService from "../services/transactionService.js";

async function create(req, res) {
    const body = req.body;
    const id = '6667aa9d4e315eaeb22d9ce2'

    try {
        const transaction = await transactionService.create(body, id);
        res.status(201).send(transaction);
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export default { create }