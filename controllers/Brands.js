import { 
    fetchBrandsService, 
    addBrandsService, 
    updateBrandsService, 
    deleteBrandsService,
    fetchBrandsByIdService 
} from '../services/Brands.js';
import escape_html from "escape-html";

export const getBrands = async (req, res) => {
    try {
        const brands = await fetchBrandsService();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBrandsById = async (req, res) => {
    try {
        const id = req.params.id;
        const brands = await fetchBrandsByIdService(id);
        res.status(200).json({
            status: 200,
            message: "Brand retrieved successfully",
            data: brands
        });
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

export const updateBrands = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name ? escape_html(req.body.name).trim() : null
        const description = req.body.description ? escape_html(req.body.description).trim() : null

        const brand = {
            name,
            description
        };

        const updatedBrand = await updateBrandsService(id, brand);
        res.status(200).json({ 
            message: "Brand updated successfully",
            data: updatedBrand
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteBrands = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedBrand = await deleteBrandsService(id);
        res.status(200).json({ 
            message: "Brand deleted successfully",
            data: deletedBrand
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getBrands, 
    getBrandsById,
    addBrands, 
    updateBrands, 
    deleteBrands
};