# AutoFixer

AutoFixer is a full-stack e-commerce application for browsing vehicles, inspired by the world and visual style of Cyberpunk 2077.

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
└── backend/        # Express API, vehicle images and SQLite database
```

## Current Features

### Frontend

The Angular frontend currently includes:

- Responsive site header and navigation
- Mobile hamburger navigation drawer
- Shopping cart icon
- Dynamic featured vehicle Hero carousel
- Automatic Hero slideshow
- Manual Hero carousel navigation
- Seamless forward and backward carousel looping
- Responsive Hero layout for desktop, tablet and mobile
- Dynamic vehicle catalogue populated from the backend
- Eight featured vehicles
- Reusable vehicle card components
- Dynamic vehicle class section
- Hypercar, Sport, Motorcycle and Offroad classes
- Responsive vehicle and class layouts
- Reusable site footer
- Non-commercial project disclaimer
- Vehicle images served by the Express backend
- Cyberpunk-inspired visual design

### Backend

The Express backend currently supports:

- Retrieving all vehicles
- Retrieving a single vehicle by slug
- Adding new vehicles
- SQLite database storage
- Vehicle seed data
- Static vehicle image hosting
- Basic API error handling
- 404 handling when a vehicle cannot be found

## API Endpoints

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
  "name": "Caliburn",
  "manufacturer": "Rayfield",
  "description": "A luxury hypercar combining breathtaking speed with unmistakable Rayfield design.",
  "price": 135000,
  "imageUrl": "caliburn.png",
  "slug": "rayfield-caliburn",
  "sku": "RAY-CAL-001",
  "vehicleClass": "Hypercar"
}
```

The database is currently seeded with eight vehicles across four vehicle classes:

- Hypercar
- Sport
- Motorcycle
- Offroad

## Running the Project

### Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Seed the vehicle database:

```bash
node seed.js
```

Start the Express server:

```bash
node index.js
```

The API will run on:

```text
http://localhost:3000
```

### Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

Then open the local address shown by Angular in the terminal.

## Development Status

AutoFixer is currently under active development.

### Implemented

- Express REST API
- SQLite vehicle database
- Database seeding
- Eight-vehicle catalogue
- Dynamic vehicle data
- Dynamic featured Hero carousel
- Automatic Hero slideshow
- Seamless carousel looping
- Manual carousel navigation
- Responsive Hero layout
- Vehicle class cards
- Backend-hosted vehicle images
- Responsive header and navigation
- Mobile navigation drawer
- Shopping cart icon
- Responsive vehicle and class layouts
- Responsive site footer
- Project disclaimer

### Still To Come

- Search functionality
- Search results page
- Vehicle detail pages
- Similar vehicle recommendations
- Vehicle card navigation
- Admin product list
- Admin product creation form
- Final navigation and routing
- Final responsive and visual polish

## Design

The interface is based on an original Figma design created for the project. It uses a dark, futuristic vehicle marketplace aesthetic inspired by Cyberpunk 2077.

Vehicle screenshots used throughout the interface were captured in-game specifically for the project.

## Disclaimer

AutoFixer is a non-commercial student project created for educational purposes.

Cyberpunk 2077 and related vehicle names, designs, imagery and other intellectual property belong to their respective rights holders.
