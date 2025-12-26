const express = require('express');
const router = express.Router();
const { getFoods, addFood, getFoodById, updateFood, deleteFood } = require('../controllers/foodController');

router.get('/', getFoods);
router.post('/', addFood);
router.get('/:id', getFoodById);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;
