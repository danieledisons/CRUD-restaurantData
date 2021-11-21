const express = require('express');
const {getRest} = require('../controllers/restaurant');
const {getMiddleware} = require('../middleware/restMiddleware')
const Middleware = require('../middleware/restmiddle')
const restaurantController = require('../controllers/restaurant')

const router = express.Router();

router.get('/', Middleware.getMiddle,restaurantController.getRest);
router.post('/', Middleware.getMiddle,restaurantController.insertRest);

module.exports = router;