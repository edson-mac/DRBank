const accountService = require('../services/accountService');

const createAccount = async (req, res, next) => {
  const { name, cpf } = req.body;
  try {
    const account = await accountService.createAccount({ name, cpf });
    return res.status(account.code).json({message: account.message});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSaldo = async (req, res, next) => {
  const { cpf } = req.tokenData;
  try {
    const account = await accountService.getSaldo({ cpf });
    return res.status(account.code).json({message: account.message});
  } catch (error) {
    console.log(error);
    next(error);
  }

};

const createDeposito = async (req, res, next) => {
  const { cpf } = req.tokenData;
  const { deposito } = req.body;
  try {
    const account = await accountService.createDeposito({ cpf, deposito });
    return res.status(account.code).json({message: account.message});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { createAccount, getSaldo, createDeposito };