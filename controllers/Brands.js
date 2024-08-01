import { fetchBrandsService } from '../services/Brands.js';

export const getBrands = async (req, res) => {
    try {
        const brands = await fetchBrandsService();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default getBrands;