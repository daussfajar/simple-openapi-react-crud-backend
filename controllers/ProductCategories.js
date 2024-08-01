import { 
    fetchProductCategoriesService
} from "../services/ProductCategories.js";

export const getProductCategories = async (req, res) => {
    try {
        const categories = await fetchProductCategoriesService();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default getProductCategories;