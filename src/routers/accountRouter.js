const router = require('express').Router();
const accountController = require('../controllers/accountController');
const validateAccount = require('../middlewares/validateAccount');
const validateToken = require('../middlewares/validateToken');
      
const { createAccount, getSaldo, createDeposito } = accountController;

router.post('/', validateAccount, createAccount);
router.get('/saldo', validateToken, getSaldo);
router.post('/deposito', validateToken, createDeposito);

module.exports = router;