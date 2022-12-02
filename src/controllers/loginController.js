const loginService = require('../services/loginService');

const createLogin = async (req, res, next) => {
  try {
    const { cpf, name } = req.body;
    const { code, response } = await loginService.newLogin(cpf, name);
    return res.status(code).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createLogin,
};