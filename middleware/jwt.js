import jwt from "jsonwebtoken"

export const generateAccessToken = (username) => {
    return jwt.sign(username, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: 18000 // 5 hours
    })
}

export const jwtAuth = (req, res, next) => {
    // Ambil token dari header 'Authorization'
    const authHeader = req.header("Authorization");

    // Periksa apakah header ada
    if (!authHeader) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    // Ambil token dari header
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        // Verifikasi token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded; // Simpan informasi pengguna yang terdekripsi di objek req

        // Lanjutkan ke middleware atau fungsi pengendali berikutnya
        next();
    } catch (error) {
        res.status(400).json({
            message: "Invalid token"
        });
    }
}

export default [generateAccessToken, jwtAuth]