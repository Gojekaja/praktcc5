import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas2", "root", "", {
  host: "34.173.159.171",
  dialect: "mysql",
});

export default db;
