const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

const path = require('path');

router.get('/', function (req, res, next) {
   res.json({ status: "success", message: "Parcel Pending API", data: { "version_number": "v1.0.0" } })
});

router.post('/users', UserController.create);

module.exports = router;