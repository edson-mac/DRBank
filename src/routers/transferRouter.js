const router = require('express').Router();
const transferController = require('../controllers/transferController');
const validateToken = require('../middlewares/validateToken');
const validateTransfer = require('../middlewares/validateTransfer');
      
const { createTransfer } = transferController;
router.post('/', validateToken, validateTransfer, createTransfer);

module.exports = router;