import express from "express";
import AuthController from "../controllers/AuthController.js";
import verifyToken from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// getall
router.get('/users', AuthController.getAllUsers);

// Register
router.post("/register", AuthController.register);

// Login
router.post("/login", AuthController.login);

// Logout
router.post("/logout", AuthController.logout);

// Verifikasi Token
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Halo ${req.user.id}, kamu sudah login!` });
});

export default router;
