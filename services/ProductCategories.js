import db from "../config/database.js";

export const fetchProductCategoriesService = async () => {
    try {
        const query = `
            SELECT category_id, category_name 
            FROM product_categories 
            ORDER BY category_name ASC
        `;

        const [rows] = await db.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

export default fetchProductCategoriesService;