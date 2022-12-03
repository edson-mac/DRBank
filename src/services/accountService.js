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

    const createDeposito = async ({ cpf, deposito }) => {
    const conta = await accountModel.findAccount(cpf);
    if (!conta) return { code: 409, message: 'Conta nao existe' };
    await accountModel.updateSaldo({id: conta.id, value: conta.saldo + Number(deposito)})
    return { code: 201, message: `Deposito no valor de ${deposito} realizado com sucesso` }; }




   module.exports = { createAccount, getSaldo, createDeposito };  