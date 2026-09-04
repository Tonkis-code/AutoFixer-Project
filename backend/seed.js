const db = require('./database');

db.run(`
    INSERT INTO vehicles (
        name,
        manufacturer,
        description,
        price,
        imageUrl,
        slug,
        sku,
        vehicleClass  
    )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`, [
    'Kusanagi CT-3X',
    'Yaiba',
    'Devilishly fast bike available right now on autofixer',
    66000,
    'kusanagict3x.png',
    'yaiba-kusanagi-ct-3x',
    'YAI-CT3X-001',
    'Motorcycle'
], (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Vehicle added successfully');
    }
});