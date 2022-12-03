const router = require('express').Router();
const accountController = require('../controllers/accountController');
const validateAccount = require('../middlewares/validateAccount');
const validateToken = require('../middlewares/validateToken');
const validadeDeposit = require('../middlewares/validadeDeposit');
      
const { createAccount, getSaldo, createDeposito } = accountController;

router.post('/', validateAccount, createAccount);
router.get('/saldo', validateToken, getSaldo);
router.post('/deposito', validateToken, validadeDeposit, createDeposito);

module.exports = router;