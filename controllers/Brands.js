import { fetchBrandsService, addBrandsService } from '../services/Brands.js';
import escape_html from "escape-html";

export const getBrands = async (req, res) => {
    try {
        const brands = await fetchBrandsService();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addBrands = async (req, res) => {
    try {
        const name = req.body.name ? escape_html(req.body.name).trim() : null
        const description = req.body.description ? escape_html(req.body.description).trim() : null

        const brand = {
            name,
            description
        };

        const newBrandId = await addBrandsService(brand);
        res.status(201).json({ 
            message: "Brand added successfully",
            id: newBrandId,
            data: brand
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {getBrands, addBrands};