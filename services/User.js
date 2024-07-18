import dotenv from "dotenv";
import db from "../config/database.js";

dotenv.config();

export const findEmailUser = async (email) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    } catch (err) {
        throw new Error('Database query failed');
    }
};

export default findEmailUser;