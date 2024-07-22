import { 
    fetchProductsService,
    fetchProductByIdService,
    updateProductService,
    deleteProductService,
    addProductService
} from "../services/Products.js";

import escape_html from "escape-html";

export const getProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Ambil parameter 'page' dari query
        const perPage = parseInt(req.query.perPage) || 10; // Ambil parameter 'perPage' dari query
        let keyword = req.query.keyword || ""; // Ambil parameter 'keyword' dari query
        keyword = escape_html(keyword); // Escape HTML agar tidak terjadi XSS
        keyword = keyword.trim(); // Hapus spasi di awal dan akhir string
                
        const products = await fetchProductsService(page, perPage, keyword || null);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id; // Ambil parameter 'id' dari URL

        const product = await fetchProductByIdService(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addProduct = async (req, res) => {
    try {
        // sanitize data
        const title = req.body.title ? escape_html(req.body.title).trim() : null
        const description = req.body.description ? escape_html(req.body.description).trim() : null
        let category_id = req.body.category_id ? escape_html(req.body.category_id) : null
        let price = req.body.price ? escape_html(req.body.price) : null
        let stock = req.body.stock ? escape_html(req.body.stock) : null
        let brand_id = req.body.brand_id ? escape_html(req.body.brand_id) : null
        const sku = req.body.sku ? escape_html(req.body.sku).trim() : null

        const data = {
            title,
            description,
            category_id,
            price,
            stock,
            brand_id,
            sku
        };

        const newProductId = await addProductService(data);
        res.status(201).json({ 
            message: "Product added successfully",
            id: newProductId,
            data: data
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id; // Ambil parameter 'id' dari URL

        // sanitize data
        const title = req.body.title ? escape_html(req.body.title).trim() : null
        const description = req.body.description ? escape_html(req.body.description).trim() : null
        let category_id = req.body.category_id ? escape_html(req.body.category_id) : null
        let price = req.body.price ? escape_html(req.body.price) : null
        let stock = req.body.stock ? escape_html(req.body.stock) : null
        let brand_id = req.body.brand_id ? escape_html(req.body.brand_id) : null
        const sku = req.body.sku ? escape_html(req.body.sku).trim() : null

        const data = {
            title,
            description,
            category_id,
            price,
            stock,
            brand_id,
            sku
        };
        
        // return res.status(200).json(data);
        const update = await updateProductService(id, data);
        if(update) {
            res.status(200).json({
                message: "Product updated successfully",
                id: id,
                data: data
            });
        } else {
            res.status(404).json({ message: "Faild to update product" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id; // Ambil parameter 'id' dari URL

        const deleted = await deleteProductService(id);
        if(deleted) {
            res.status(200).json({ 
                message: "Product deleted successfully",
                id: id
            });
        } else {
            res.status(404).json({ message: "Faild to delete product" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default [getProducts, getProductById, addProduct, updateProduct, deleteProduct];