const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./autofixer.db');

db.run(`
    CREATE TABLE IF NOT EXISTS vehicles ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        manufacturer TEXT NOT NULL,
        description TEXT,
        price INTEGER NOT NULL,
        imageUrl TEXT,
        slug TEXT NOT NULL UNIQUE,
        sku TEXT NOT NULL,
        vehicleClass TEXT
    )        
`);

module.exports = db;