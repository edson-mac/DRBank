const router = require('express').Router();
const accountController = require('../controllers/accountController');
const validateAccount = require('../middlewares/validateAccount');
const validateToken = require('../middlewares/validateToken');
      
const { createAccount, getSaldo } = accountController;

router.post('/', validateAccount, createAccount);
router.get('/saldo', validateToken, getSaldo);

module.exports = router;