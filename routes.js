import express, { Router } from "express";
import { loginUser } from "./controllers/Auth.js";
import { getProducts, getProductById } from "./controllers/Products.js";
import { jwtAuth } from "./middleware/jwt.js";
import { validateId } from "./middleware/ValidateId.js";
import dotenv from 'dotenv';
dotenv.config();

import { body, validationResult } from "express-validator";

const router = express.Router();

// handlers
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Routes
const apiPath = process.env.VERSION_URL || "/api/v1";
router.post(
    apiPath + "login",
    [
        body("email", "Please enter a valid email").isEmail().not().isEmpty(),
        body("password", "Password field is required").not().isEmpty(),
        body("password", "Password must be at least 3 characters long").isLength({ min: 3 }),
        handleValidationErrors, // Middleware untuk menangani kesalahan validasi
    ],
    loginUser
);

router.get(apiPath + "products", jwtAuth, getProducts);
router.get(apiPath + "products/:id", jwtAuth, validateId, getProductById);

export default router;
