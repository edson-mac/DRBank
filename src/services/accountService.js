const accountModel = require('../models/accountModel');

const createAccount = async ({ name, cpf}) => {
    const conta = await accountModel.findAccount(cpf);
    if (conta) return { code: 409, message: 'Uma conta com este CPF já existe' };
    const result = await accountModel.createAccount({name, cpf})
    return result; 
   };
   
   const getSaldo = async ({ cpf }) => {
    const conta = await accountModel.findAccount(cpf);
    if (!conta) return { code: 409, message: 'Conta nao existe' };
    const result = await accountModel.findSaldo(cpf)
    return { code: 201, message: result }; }

   module.exports = { createAccount, getSaldo };  