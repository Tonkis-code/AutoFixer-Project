// Load the Express package so we can use it in this file
const express = require('express');
const db = require('./database');


// Creates our Express application
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Welcome to AutoFixer API');
});


app.get('/api/vehicles', (req, res) => {

    db.all('SELECT * FROM vehicles', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
});

app.get('/api/vehicles/:slug', (req, res) => {
    db.get(
        'SELECT * FROM vehicles WHERE slug = ?',
        [req.params.slug],
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!row) {
                return res.status(404).json({ error: 'Vehicle not found' });
            }

            res.json(row);
        }
    );
});

app.post('/api/vehicles', (req, res) => {
    const {
        name,
        manufacturer,
        description,
        price,
        imageUrl,
        slug,
        sku,
        vehicleClass
    } = req.body;

    db.run(
        `INSERT INTO vehicles
        (name, manufacturer, description, price, imageUrl, slug, sku, vehicleClass)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, manufacturer, description, price, imageUrl, slug, sku, vehicleClass],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                id: this.lastID,
                name,
                manufacturer,
                description,
                price,
                imageUrl,
                slug,
                sku,
                vehicleClass
            });
        }
    );
});

// Starts the server and listens for requests on port 3000
app.listen(3000, () => {
    console.log('AutoFixer server is running');
})