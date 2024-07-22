import { fetchProductByIdService } from "../services/Products.js";

export const getProductByIdMiddleware = async (req, res, next) => {
    try {
        const id = req.params.id; // Ambil parameter 'id' dari URL

        const product = await fetchProductByIdService(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        next()
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getProductByIdMiddleware;