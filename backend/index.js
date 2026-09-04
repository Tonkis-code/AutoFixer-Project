// Load the Express package so we can use it in this file
const express = require('express');

// Creates our Express application
const app = express();

app.get('/api', (req, res) => {
    res.send('Welcome to AutoFixer API');
});

const vehicles = [
    {
        name: 'Kusanagi CT-3X',
        manufacturer: 'Yaiba',
        price: 66000,
        slug: 'yaiba-kusanagi-ct-3x'
    }
];

app.get('/api/vehicles', (req, res) => {
    res.json(vehicles);
});

app.get('/api/vehicles/:slug', (req, res) => {
    res.json(req.params.slug);
});

// Starts the server and listens for requests on port 3000
app.listen(3000, () => {
    console.log('AutoFixer server is running');
})