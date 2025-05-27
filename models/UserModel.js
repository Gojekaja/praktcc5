import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const Notes = db.define(
  "notes", // Nama Tabel
  {
    pengirim: Sequelize.STRING,
    notes: Sequelize.TEXT,
  }
);

db.sync().then(() => console.log("Database synced"));

export default Notes;
