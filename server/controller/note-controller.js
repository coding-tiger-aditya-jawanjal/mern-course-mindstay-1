const Note = require("../models/note-model");

exports.addNote = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ msg: "Title & Description not added !", ok: false });
  }

  const note = new Note({
    title,
    description,
  });

  const savedNote = await note.save();

  res.status(200).json({ msg: "Added new Note !", data: savedNote, ok: true });
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res
    .status(200)
    .json({ msg: "Notes fetched successfully !", data: notes, ok: true });
};

exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!id) {
    return res.status(400).json({ msg: "Id is required !", ok: false });
  }

  if (!title && !description) {
    return res
      .status(400)
      .json({ msg: "Title or Description is required !", ok: false });
  }

  let updates = {};
  if (title) updates.title = title;
  if (description) updates.description = description;

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    {
      $set: updates,
    },
    { new: true }
  );

  res
    .status(201)
    .json({ msg: "Note is updated !", data: updatedNote, ok: true });
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ msg: "Id is required !", ok: false });
  }

  await Note.findByIdAndDelete(id);

  res.status(200).json({ msg: "Note is deleted !", ok: true });
};
