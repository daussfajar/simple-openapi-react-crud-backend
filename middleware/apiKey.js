import dotenv from 'dotenv';
dotenv.config();

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = process.env.API_KEY;
    const xapiKey = process.env.X_API_KEY;

    let apiKeyHeader = req.headers['api-key'];
    let xApiKeyHeader = req.headers['x-api-key'];

    if (apiKeyHeader !== apiKey) {
        return res.status(500).json({
            message: "API Key is required"
        });
    }

    if (xApiKeyHeader !== xapiKey) {
        return res.status(500).json({
            message: "X-API-KEY is required"
        });
    }
    
    next();
};

export default apiKeyMiddleware;