const express = require("express");
const { myFunction } = require("./controller/user-controller");

const router = express.Router();

router.get(`/hello`, myFunction);

module.exports = router;
