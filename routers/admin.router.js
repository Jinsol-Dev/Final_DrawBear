const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/adminController');
const adminController = new AdminController();

router.post('/signup', adminController.signupAdmin);

module.exports = router;
