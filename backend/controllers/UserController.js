import Notes from "../models/UserModel.js";

// GET
async function getNotes(req, res) {
  try {
    const response = await Notes.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createNotes(req, res) {
  try {
    const inputResult = req.body;
    await Notes.create(inputResult);
    res.status(201).json({ msg: "Notes Created" });
  } catch (error) {
    console.log(error.message);
  }
}

async function updateNotes(req, res) {
  try {
    const inputResult = req.body;
    await Notes.update(inputResult, {
      where: { id: req.params.id },
    });
    res.status(201).json({ msg: "Notes Updated" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteNotes(req, res) {
  try {
    await Notes.destroy({ where: { id: req.params.id } });
    res.status(201).json({ msg: "Notes Deleted" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getNotes, createNotes, updateNotes, deleteNotes };
