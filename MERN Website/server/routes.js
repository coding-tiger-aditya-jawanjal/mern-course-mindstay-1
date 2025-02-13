const express = require("express");
const { signup, login, logout } = require("./controllers/user-controller");
const auth = require("./middleware/middleware");
const { addProduct } = require("./controllers/product-controller");
const router = express.Router();

router.post(`/signup`, signup);
router.post(`/login`, login);
router.post(`/logout`, auth, logout);

router.post(`/product`, auth, addProduct);

module.exports = router;
