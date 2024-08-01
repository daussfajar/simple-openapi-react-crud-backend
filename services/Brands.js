import db from "../config/database.js";

export const fetchBrandsService = async () => {
    try {
        const query = `
            SELECT brand_id, brand_name 
            FROM product_brands 
            ORDER BY brand_name ASC
        `;

        const [rows] = await db.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

export default fetchBrandsService;