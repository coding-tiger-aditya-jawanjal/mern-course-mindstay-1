// Create , Deleting , Updating , Reading something

const Note = require("../models/note-model");

exports.addNote = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ msg: "Title & Description not added !" });
  }

  const note = new Note({
    title,
    description,
  });

  const savedNote = await note.save();

  res.status(200).json({ msg: "Added new Note !", data: savedNote });
};
