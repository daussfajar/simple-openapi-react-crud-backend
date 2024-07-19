import { fetchProducts, countProducts, fetchProductById } from "../services/Products.js";

export const getProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Ambil parameter 'page' dari query
        const perPage = parseInt(req.query.perPage) || 10; // Ambil parameter 'perPage' dari query
        let keyword = req.query.keyword || ""; // Ambil parameter 'keyword' dari query
        
        // sanitize the keyword
        let sanitizedKeyword = keyword.replace(/[^a-zA-Z0-9 ]/g, "");
        sanitizedKeyword = sanitizedKeyword.trim();
        keyword = sanitizedKeyword;

        const products = await fetchProducts(page, perPage, keyword || null);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id; // Ambil parameter 'id' dari URL

        const product = await fetchProductById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getProducts;