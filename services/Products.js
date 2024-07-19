import db from "../config/database.js";

export const fetchProducts = async (page = 1, perPage = 10, keyword = null) => {
    try {
        // Hitung offset
        const offset = (page - 1) * perPage;

        // Hitung last page
        const totalProducts = await countProducts() || 0;
        const lastPage = Math.ceil(totalProducts / perPage)

        // Search query
        let searchQuery = '';
        if (keyword !== null) {
            searchQuery = `WHERE a.title LIKE '%${keyword}%'`;
        }

        // Query untuk mengambil produk dengan pagination
        const query = `
            SELECT 
                a.id, 
                a.title,
                a.description,
                a.category_id,
                a.price,
                a.stock,
                a.brand_id,
                a.sku,
                b.category_name,
                c.brand_name
            FROM products AS a
            JOIN product_categories AS b 
                ON a.category_id = b.category_id
            LEFT JOIN product_brands AS c
                ON a.brand_id = c.brand_id
            ${searchQuery}
            ORDER BY a.id DESC
            LIMIT ?, ?
        `;
        
        const [rows] = await db.query(query, [offset, perPage]);
        return {
            currentPage: page,
            perPage: perPage,
            totalProducts: totalProducts,
            firstPage: 1,
            lastPage: lastPage,
            products: rows
        }
    } catch (error) {
        throw new Error('Database query failed');
    }
};

export const countProducts = async () => {
    try {
        const query = `
            SELECT COUNT(*) AS total
            FROM products
        `;
        
        const [rows] = await db.query(query);
        return rows[0].total;
    } catch (error) {
        throw new Error('Database query failed');
    }
};

export const fetchProductById = async (id) => {
    try {
        const query = `
            SELECT 
                a.id, 
                a.title,
                a.description,
                a.category_id,
                a.price,
                a.stock,
                a.brand_id,
                a.sku,
                b.category_name,
                c.brand_name
            FROM products AS a
            JOIN product_categories AS b 
                ON a.category_id = b.category_id
            LEFT JOIN product_brands AS c
                ON a.brand_id = c.brand_id
            WHERE a.id = ?
        `;
        
        const [rows] = await db.query(query, [id]);
        return rows[0];
    } catch (error) {
        throw new Error('Database query failed');
    }
}

export default [fetchProducts, fetchProductById, countProducts];