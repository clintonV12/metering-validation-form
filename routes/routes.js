const express = require('express');
const router = express.Router();
const validationRoute = require('./validater.route');

//TODO::add token verification to all admin routes
router.use('/validations', validationRoute);
module.exports = router;