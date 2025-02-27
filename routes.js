import express, { Router } from "express";
import { loginUser, verifyToken } from "./controllers/Auth.js";
import { 
    getProducts, 
    getProductById, 
    addProduct,
    updateProduct,
    deleteProduct
} from "./controllers/Products.js";
import getProductCategories from "./controllers/ProductCategories.js";
import {
    getBrands, 
    getBrandsById,
    addBrands,
    updateBrands,
    deleteBrands
} from "./controllers/Brands.js";

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

router.get(apiPath + "verify-token", 
    ipWhitelistMiddleware,
    apiKeyMiddleware,
    verifyToken
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

router.get(apiPath + "product-categories", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    getProductCategories
);

router.get(apiPath + "brands", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    getBrands
);

router.get(apiPath + "brands/:id", 
    ipWhitelistMiddleware,
    apiKeyMiddleware, 
    jwtAuth, 
    validateId, 
    getBrandsById
);

router.post(apiPath + "brands",
    ipWhitelistMiddleware,
    apiKeyMiddleware,
    jwtAuth,
    [
        body("name", "Name field is required").not().isEmpty(),
        handleValidationErrors, //
    ],
    addBrands
)

router.put(apiPath + "brands/:id",
    ipWhitelistMiddleware,
    apiKeyMiddleware,
    jwtAuth,
    [
        body("name", "Name field is required").not().isEmpty(),
        handleValidationErrors, //
    ],
    updateBrands
)

router.delete(apiPath + "brands/:id",
    ipWhitelistMiddleware,
    apiKeyMiddleware,
    jwtAuth,
    deleteBrands
)

export default router;
