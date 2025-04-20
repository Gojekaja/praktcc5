import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas2", "root", "", {
  host: "34.45.153.34",
  dialect: "mysql",
});

export default db;
