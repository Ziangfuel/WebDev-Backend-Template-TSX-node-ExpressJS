const express = require('express');
const app_router = express.Router();

// -- import functions
const MockController = require('../controllers/app/MockController');

// end point
app_router.post('/mock', MockController.mockFunction);


module.exports = app_router;