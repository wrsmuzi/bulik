/*
const express = require('express');
const router = express.Router();
const twitController = require('./twit.controller.js');

const db = require('../connection.js');



router.post('/', twitController.getTwitById);
router.put('/', twitController.updateProductPrice);
router.delete('/', twitController.deleteProduct);

router.post('/add', async (req, res) => {
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
});
module.exports = router;


 */


const express = require('express');
const router = express.Router();

// Імпортуємо всі функції з `twit.controller.js`
const { getTwitById, addProduct, getAllProducts } = require('./twit.controller.js');
console.log({ getAllProducts });

// Визначаємо маршрути
router.post('/', getTwitById);
router.post('/add', addProduct);
router.get('/all', getAllProducts);

module.exports = router;
