import db from "../config/database.js";

export const fetchProductsService = async (page = 1, perPage = 10, keyword = null) => {
    try {
        // Hitung offset
        const offset = (page - 1) * perPage;

        // Search query
        let searchQuery = '';
        let queryParams = [];
        let countParams = [];
        
        if (keyword !== null) {
            searchQuery = 'WHERE a.title LIKE ? OR a.description LIKE ? OR b.category_name LIKE ? OR c.brand_name LIKE ?';
            const keywordParam = `%${keyword}%`;
            queryParams.push(keywordParam, keywordParam, keywordParam, keywordParam);
            countParams.push(keywordParam, keywordParam, keywordParam, keywordParam);
        }

        // Query untuk menghitung total produk
        const countQuery = `
            SELECT COUNT(*) as count 
            FROM products AS a
            JOIN product_categories AS b ON a.category_id = b.category_id
            LEFT JOIN product_brands AS c ON a.brand_id = c.brand_id
            ${searchQuery}
        `;
        
        // Hitung total produk
        const [countResult] = await db.query(countQuery, countParams);
        const totalProducts = countResult[0].count || 0;
        const lastPage = Math.ceil(totalProducts / perPage);

        // Query untuk mengambil produk dengan pagination
        const fetchQuery = `
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
            JOIN product_categories AS b ON a.category_id = b.category_id
            LEFT JOIN product_brands AS c ON a.brand_id = c.brand_id
            ${searchQuery}
            ORDER BY a.id DESC
            LIMIT ?, ?
        `;
        
        queryParams.push(offset, perPage);
        
        const [rows] = await db.query(fetchQuery, queryParams);

        return {
            currentPage: page,
            perPage: perPage,
            totalProducts: totalProducts,
            firstPage: 1,
            lastPage: lastPage,
            products: rows
        };
    } catch (error) {
        throw new Error(`Database query failed: ${error.message}`);
    }
};

export const fetchProductByIdService = async (id) => {
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

export const addProductService = async (data) => {
    try {
        const query = `
            INSERT INTO products (title, description, category_id, price, stock, brand_id, sku)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        
        const result = await db.query(query, [
            data.title,
            data.description,
            data.category_id,
            data.price,
            data.stock,
            data.brand_id,
            data.sku
        ]);

        return result[0].insertId;
    } catch (error) {
        throw new Error('Database query failed');
    }
}

export const updateProductService = async (id, data) => {
    try {
        const query = `
            UPDATE products
            SET title = ?, description = ?, category_id = ?, price = ?, stock = ?, brand_id = ?, sku = ?
            WHERE id = ?
        `;
        
        await db.query(query, [
            data.title,
            data.description,
            data.category_id,
            data.price,
            data.stock,
            data.brand_id,
            data.sku,
            id
        ]);

        return true;
    } catch (error) {
        throw new Error('Database query failed');
    }
}

export const deleteProductService = async (id) => {
    try {
        const query = 'DELETE FROM products WHERE id = ?';
        await db.query(query, [id]);
        return true;
    } catch (error) {
        throw new Error('Database query failed');
    }
}

export default [fetchProductsService, fetchProductByIdService, addProductService, updateProductService, deleteProductService];