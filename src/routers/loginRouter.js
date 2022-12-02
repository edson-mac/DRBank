const router = require('express').Router();
const loginController = require('../controllers/loginController');
const validateAccount = require('../middlewares/validateAccount');
      
const { createLogin } = loginController;
router.post('/', validateAccount, createLogin);

module.exports = router;