const transferService = require('../services/transferService');
const jwt = require('jsonwebtoken');

const createTransfer = async (req, res, next) => {
    try {
        const { destinatario, transferValue } = req.body;
        const { authorization } = req.headers;
        const tokenCheck = jwt.decode(authorization);
        const remetenteCpf = tokenCheck.data.cpf;
        const transfer = await transferService.createTransfer({ remetenteCpf, destinatario, transferValue });
        return res.status(transfer.code).json({message: transfer.message});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { createTransfer };