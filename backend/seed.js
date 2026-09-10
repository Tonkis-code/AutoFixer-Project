const db = require('./database');

const vehicles = [
    [
        'Caliburn',
        'Rayfield',
        'A luxury hypercar combining breathtaking speed with unmistakable Rayfield design.',
        135000,
        'caliburn.png',
        'rayfield-caliburn',
        'RAY-CAL-001',
        'Hypercar'
    ],
    [
        'Aerondight "Guinevere"',
        'Rayfield',
        'An uncompromising luxury hypercar built for Night City\'s wealthiest drivers.',
        155000,
        'aerondight.png',
        'rayfield-aerondight-guinevere',
        'RAY-AER-001',
        'Hypercar'
    ],
    [
        'Type-66 Avenger',
        'Quadra',
        'An aggressive high-performance sports car with classic Quadra muscle.',
        75000,
        'type66avenger.png',
        'quadra-type-66-avenger',
        'QUA-T66-001',
        'Sport'
    ],
    [
        'Shion Targa MZT',
        'Mizutani',
        'A sleek open-top sports car made for cruising Night City in style.',
        61000,
        'shiontargamzt.png',
        'mizutani-shion-targa-mzt',
        'MIZ-MZT-001',
        'Sport'
    ],
    [
        'Kusanagi CT-3X',
        'Yaiba',
        'A devilishly fast motorcycle built for riders who refuse to slow down.',
        66000,
        'kusanagict3x.png',
        'yaiba-kusanagi-ct-3x',
        'YAI-CT3X-001',
        'Motorcycle'
    ],
    [
        'Nazaré "Racer"',
        'ARCH',
        'A performance-focused motorcycle combining premium engineering with raw speed.',
        74000,
        'nazareracer.png',
        'arch-nazare-racer',
        'ARC-NAZ-001',
        'Motorcycle'
    ],
    [
        'Shion "Coyote"',
        'Mizutani',
        'A heavily modified off-road machine designed to dominate the Badlands.',
        77000,
        'shioncoyote.png',
        'mizutani-shion-coyote',
        'MIZ-COY-001',
        'Offroad'
    ],
    [
        'Galena "Gecko"',
        'Thorton',
        'A compact weaponized off-roader built to survive the harshest Badlands terrain.',
        45000,
        'galenagecko.png',
        'thorton-galena-gecko',
        'THO-GEC-001',
        'Offroad'
    ]
];

const insertVehicle = `
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
`;

db.run('DELETE FROM vehicles', (err) => {
    if (err) {
        console.error('Failed to clear vehicles:', err.message);
        return;
    }

    console.log('Old vehicles cleared');

    vehicles.forEach((vehicle) => {
        db.run(insertVehicle, vehicle, (err) => {
            if (err) {
                console.error('Failed to add vehicle:', err.message);
            } else {
                console.log(`Vehicle added: ${vehicle[0]}`);
            }
        });
    });
});