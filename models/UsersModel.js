import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "users"
const Users = db.define(
  "users", // Nama Tabel
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

db.sync().then(() => console.log("Database synced"));

export default Users;
