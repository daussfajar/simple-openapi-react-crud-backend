import express, { Router } from "express";
import { loginUser } from "./controllers/Auth.js";
import { 
    getProducts, 
    getProductById, 
    addProduct,
    updateProduct,
    deleteProduct
} from "./controllers/Products.js";
import apiKeyMiddleware from "./middleware/apiKey.js";
import ipWhitelistMiddleware from './middleware/ipWhitelist.js';
import { jwtAuth } from "./middleware/jwt.js";
import { validateId } from "./middleware/ValidateId.js";
import { getProductByIdMiddleware } from "./middleware/Products.js";
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
    ipWhitelistMiddleware,
    apiKeyMiddleware,
    [
        body("email", "Please enter a valid email").isEmail().not().isEmpty(),
        body("password", "Password field is required").not().isEmpty(),
        body("password", "Password must be at least 3 characters long").isLength({ min: 3 }),
        handleValidationErrors, // Middleware untuk menangani kesalahan validasi
    ],
    loginUser
);

router.get(apiPath + "products", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    getProducts
);
router.get(apiPath + "products/:id", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    validateId, 
    getProductById
);
router.post(apiPath + "products", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    addProduct
);
router.put(apiPath + "products/:id", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    validateId, 
    getProductByIdMiddleware,
    // validataion
    [
        body("title", "Title field is required").not().isEmpty(),
        body("description", "Description field is required").not().isEmpty(),
        body("category_id", "Category ID field is required").not().isEmpty().isInt(),
        body("price", "Price field is required").not().isEmpty().isNumeric(),
        body("stock", "Stock field is required").not().isEmpty().isInt(),
        body("brand_id", "Brand ID field is required").not().isEmpty().isInt(),
        body("sku", "SKU field is required").not().isEmpty(),
        handleValidationErrors, //  Middleware untuk menangani kesalahan validasi
    ],    
    updateProduct
);
router.delete(apiPath + "products/:id", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    validateId, 
    getProductByIdMiddleware, 
    deleteProduct
);

export default router;
