const whitelist = [
    '::1'
];

const ipWhitelistMiddleware = (req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    if (whitelist.includes(clientIp)) {
        next(); // Lanjutkan ke middleware berikutnya atau route handler
    } else {
        res.status(403).json({ message: "Access denied: Your IP is not allowed." });
    }
};

export default ipWhitelistMiddleware;