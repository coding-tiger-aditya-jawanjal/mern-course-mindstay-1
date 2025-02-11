const express = require("express");
const { addNote } = require("./controller/note-controller");

const router = express.Router();

router.post(`/note`, addNote);

module.exports = router;
