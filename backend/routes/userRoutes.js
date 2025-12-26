const express = require('express');
const router = express.Router();
const { getUser, updateUser } = require('../controllers/userController');

router.get('/', getUser);
router.post('/', updateUser);

module.exports = router;
