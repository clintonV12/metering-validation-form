const express = require('express');
const router = express.Router();
const validationController = require('../controller/validation.controller');

router.get('/meter_number/:number',validationController.validateMeterNumber);
router.get('/ip_address/:ip',validationController.validateIPaddress);
router.get('/bus_address/:address',validationController.validateBusAddress);

module.exports = router;