import {generateAccessToken} from "../middleware/jwt.js";
import escape_html from "escape-html";
import { validationResult } from "express-validator";
import crypto from "crypto-js";

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
            username: user.email
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