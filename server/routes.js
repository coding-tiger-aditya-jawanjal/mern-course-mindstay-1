const express = require("express");
const {
  addNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("./controller/note-controller");

const router = express.Router();

router.post(`/note`, addNote);
router.get(`/note`, getNotes);
router.put(`/note/:id`, updateNote);
router.delete(`/note/:id`, deleteNote);

module.exports = router;
