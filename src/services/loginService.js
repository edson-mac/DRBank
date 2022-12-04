const accountModel = require('../models/accountModel');
const tokenGenerator = require('../jwt');

const newLogin = async (cpf, name) => {
    const findUser = await accountModel.findAccount(cpf)
    if (!findUser || name.toLowerCase() !== findUser.name.toLowerCase()) {
      return { code: 400, response: { message: 'CPF ou Nome incorretos' } }; 
    }
    const token = tokenGenerator({ cpf, name });
    return { code: 200, response: { token, name } };
  };
    
    module.exports = {
      newLogin,
    }