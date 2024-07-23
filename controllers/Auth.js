import {generateAccessToken} from "../middleware/jwt.js";
import escape_html from "escape-html";
import { validationResult } from "express-validator";
import crypto from "crypto-js";
import jwt from "jsonwebtoken"

import { findEmailUser } from "../services/User.js";

export const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const email = escape_html(req.body.email);
        const password = escape_html(req.body.password);

        const md5Hash = crypto.MD5(password).toString();
        const sha1Hash = crypto.SHA1(md5Hash).toString();

        const user = await findEmailUser(email);

        if (!user) {
            return res.status(200).json({
                status: 400,
                message: "User does not exist"
            });
        }

        if (sha1Hash !== user.password) {
            return res.status(200).json({
                status: 400,
                message: "Invalid credentials"
            });
        }

        const token = generateAccessToken({
            id: user.id,
            fullname: user.fullname,
            email: user.email
        });

        return res.status(200).json({
            status: 200,
            message: "Login successful",
            data: {
                fullname: user.fullname,
                email: user.email,
                token: token
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const verifyToken = async (req, res) => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader) {
            return res.status(401).json({
                message: "Access denied, no token provided"
            });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                message: "Access denied, no token provided"
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = decoded;
            return res.status(200).json({
                message: "Token is valid",
                data: req.user
            });
        } catch (error) {
            return res.status(400).json({
                message: "Invalid token"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default [loginUser, verifyToken]