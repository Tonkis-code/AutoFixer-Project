# AutoFixer

AutoFixer is a full-stack e-commerce project for buying vehicles, inspired by the world and visual style of Cyberpunk 2077.

The project is being developed as part of the JavaScript 3 course and consists of an Angular frontend, an Express backend, and a SQLite database.

## Tech Stack

- Angular
- TypeScript
- Node.js
- Express
- SQLite
- HTML
- CSS

## Project Structure

```text
autofixer-project/
├── frontend/       # Angular application
└── backend/        # Express API and SQLite database
```

## Current Backend Features

The backend currently supports:

- Retrieving all vehicles
- Retrieving a single vehicle by slug
- Adding new vehicles
- SQLite database storage
- Basic API error handling
- 404 handling when a vehicle cannot be found

### API Endpoints

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| GET    | `/api`                | API welcome route     |
| GET    | `/api/vehicles`       | Get all vehicles      |
| GET    | `/api/vehicles/:slug` | Get a vehicle by slug |
| POST   | `/api/vehicles`       | Add a new vehicle     |

## Vehicle Data

Vehicles are stored with the following information:

- ID
- Name
- Manufacturer
- Description
- Price
- Image URL
- Slug
- SKU
- Vehicle class

Example:

```json
{
  "id": 1,
  "name": "Kusanagi CT-3X",
  "manufacturer": "Yaiba",
  "description": "Devilishly fast bike available right now on autofixer",
  "price": 66000,
  "imageUrl": "kusanagict3x.png",
  "slug": "yaiba-kusanagi-ct-3x",
  "sku": "YAI-CT3X-001",
  "vehicleClass": "Motorcycle"
}
```

## Running the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

The API will run on:

```text
http://localhost:3000
```

## Development Status

AutoFixer is currently under development.

Planned functionality includes:

- Dynamic vehicle catalogue
- Featured vehicle
- Vehicle classes
- Vehicle detail pages
- Search
- Similar vehicles
- Admin product management
- Adding vehicles through the admin interface
- Responsive design

## Design

The interface is based on an original Figma design with a dark, futuristic vehicle marketplace theme inspired by Cyberpunk 2077.

## Disclaimer

This is a non-commercial student project created for educational purposes. Cyberpunk 2077 and related names and imagery are property of their respective rights holders.
