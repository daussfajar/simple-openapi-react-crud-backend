import db from "../config/database.js";

export const fetchBrandsService = async () => {
    try {
        const query = `
            SELECT brand_id, brand_name, brand_description 
            FROM product_brands 
            ORDER BY brand_name ASC
        `;

        const [rows] = await db.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

export const addBrandsService = async (brand) => {
    try {
        const query = `
            INSERT INTO product_brands (brand_name, brand_description) 
            VALUES (?, ?)
        `;

        const [result] = await db.query(query, [brand.name, brand.description]);
        return result;
    } catch (error) {
        throw error;
    }
}

export default {fetchBrandsService, addBrandsService};