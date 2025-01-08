/*







const db = require('../connection.js');

const getTwitById = async (req, res) => {
    const { id } = req.body;  // Отримуємо ID з тіла запиту
    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        // Використовуємо SELECT для отримання продукту за ID
        const query = `SELECT * FROM products WHERE product_id = $1`;
        const result = await db.query(query, [id]); 

        if (result.rows && result.rows.length > 0) {
            const product = result.rows[0];  
            res.json(product); 
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};const addProduct = async (req, res) => {
    const { product_name, category, unit_price } = req.body;

    if (!product_name || !category || !unit_price) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const query = `
            INSERT INTO products (product_name, category, unit_price)
            VALUES ($1, $2, $3) RETURNING *`;
        const result = await db.query(query, [product_name, category, unit_price]);

        if (result.rows && result.rows.length > 0) {
            res.json({ message: 'Product added successfully', product: result.rows[0] });
        } else {
            res.status(500).json({ message: 'Failed to add product' });
        }
    } catch (error) {
        console.error('Error inserting into database:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
const updateProductPrice = async (req, res) => {
    const { product_id, unit_price } = req.body;

    if (!product_id || !unit_price) {
        return res.status(400).json({ message: 'Product ID and new price are required' });
    }
    try {
        console.log('Updating product price with:', { product_id, unit_price });
        const query = `UPDATE products SET unit_price = $1 WHERE product_id = $2 RETURNING *`;
        const result = await db.query(query, [unit_price, product_id]);

        if (result.rows.length > 0) {
            console.log('Update successful:', result.rows[0]);
            res.json({ message: 'Price updated successfully', product: result.rows[0] });
        } else {
            console.log('Product not found for ID:', id);
            res.status(404).json({ message: 'Product not found' });
        }
        console.log('Query executed:', query, [unit_price, product_id]);
    } catch (error) {
        console.error('Error updating product price:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }


    console.log('Received body:', req.body);


};

exports.updateProductPrice = async (req, res) => {
    const { product_id, unit_price } = req.body;

    // Перевірка вхідних даних
    if (!product_id || !unit_price) {
        return res.status(400).json({ message: 'Product ID and new price are required.' });
    }


    const deleteProduct = async (req, res) => {
        const { product_id, product_name } = req.body;
    
        if (!product_id || !product_name) {
            return res.status(400).json({ message: 'Product ID and name are required.' });
        }
    
        try {
            console.log('Received body:', req.body);
    
            const query = `DELETE FROM products WHERE product_id = $1 AND product_name = $2 RETURNING *`;
            console.log('Executing query:', query, [product_id, product_name]);
    
            const result = await db.query(query, [product_id, product_name]);
    
            console.log('Query result:', result);
    
            if (result.rowCount > 0) {
                res.status(200).json({ message: 'Product deleted successfully.', product: result.rows[0] });
            } else {
                res.status(404).json({ message: 'Product not found.' });
            }
        } catch (error) {
            console.error('Error deleting product:', error.message);
            res.status(500).json({ message: 'Failed to delete product.', error: error.message });
        }
    };
    


    try {
        console.log('Received body:', req.body);

        // SQL-запит для оновлення ціни
        const query = 'UPDATE products SET unit_price = $1 WHERE product_id = $2 RETURNING *';
        const values = [unit_price, product_id];

        // Виконання запиту
        const result = await db.query(query, values);

        // Перевірка результату
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        console.log('Query executed:', query, values);
        return res.status(200).json({
            message: 'Price updated successfully.',
            product: result.rows[0],
        });
    } catch (error) {
        console.error('Error updating product price:', error.message);
        return res.status(500).json({ message: 'Failed to update price.', error: error.message });
    }
};










const deleteProduct = async (req, res) => {
    const { product_id, product_name } = req.body;

    if (!product_id || !product_name) {
        return res.status(400).json({ message: 'Product ID and name are required.' });
    }

    try {
        const query = `DELETE FROM products WHERE product_id = $1 AND product_name = $2 RETURNING *`;
        const result = await db.query(query, [product_id, product_name]);

        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Product deleted successfully.', product: result.rows[0] });
        } else {
            res.status(404).json({ message: 'Product not found.' });
        }
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: 'Failed to delete product.', error: error.message });
    }
};

module.exports = { getTwitById, addProduct, updateProductPrice, deleteProduct };


 */




const db = require('../connection.js');

const getTwitById = async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const query = `SELECT * FROM products WHERE user_id = $1`;
        const result = await db.query(query, [id]);

        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};




const addProduct = async (req, res) => {
    const { name, email, password, number, user_id } = req.body;

    if (!name || !email || !password || !number || !user_id) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const query = `
            INSERT INTO products (name, email, password, number, user_id)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const result = await db.query(query, [name, email, password, number, user_id]);

        res.json({ message: 'Information sent successfully', product: result.rows[0] });
    } catch (error) {
        console.error('Error inserting into database:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }



};

const getAllProducts = async (req, res) => {
    try {
        const query = 'SELECT * FROM products'; // SQL-запит для отримання всіх записів
        const result = await db.query(query); // Виконання запиту
        res.json(result.rows); // Відправка результатів у відповідь
    } catch (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
    console.log('getAllProducts is defined:', typeof getAllProducts === 'function');
};


module.exports = {
    getAllProducts,
    getTwitById,
    addProduct,
   
};











