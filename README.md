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
- Expandable vehicle class navigation
- Shopping cart icon
- Dynamic featured vehicle Hero carousel
- Automatic Hero slideshow
- Manual Hero carousel navigation
- Seamless forward and backward carousel looping
- Responsive Hero layout for desktop, tablet and mobile
- Dynamic vehicle catalogue populated from the backend
- Eight featured vehicles displayed on the homepage
- Reusable vehicle card components
- Dynamic vehicle class section
- Hypercar, Sport, Motorcycle and Offroad classes
- Vehicle class filtering and navigation
- Vehicle search by name, manufacturer and class
- Dynamic search results page
- Search result count
- Dynamic vehicle detail pages using vehicle slugs
- Similar vehicle recommendations
- Vehicle card navigation to detail pages
- Hero navigation to detail pages
- Admin product list
- Admin product creation form
- Dynamic form binding using Angular forms
- Product creation through the backend API
- Automatic navigation back to the admin product list after creation
- Responsive vehicle, class, search, detail and admin layouts
- Reusable site footer
- Non-commercial project disclaimer
- Vehicle images served by the Express backend
- Cyberpunk-inspired visual design

### Backend

The Express backend currently supports:

- Retrieving all vehicles
- Retrieving a single vehicle by slug
- Adding new vehicles
- Automatic slug generation for newly created vehicles
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

The initial database seed contains eight vehicles across four vehicle classes:

- Hypercar
- Sport
- Motorcycle
- Offroad

Additional vehicles can be added through the administration interface. The homepage is limited to displaying eight featured vehicles, while the admin product list and search functionality can access the full vehicle catalogue.

## Administration

AutoFixer includes a basic administration interface for managing the vehicle catalogue.

### Product List

```text
/admin/products
```

The product list retrieves and displays all vehicles currently stored in the SQLite database, including their name, SKU and price.

### New Product

```text
/admin/products/new
```

New vehicles can be created using the administration form.

The form supports:

- Name
- Description
- SKU
- Image URL
- Price
- Brand / Manufacturer
- Vehicle class

When the form is submitted, Angular sends the vehicle data to the Express API. The backend generates the vehicle slug, stores the new vehicle in SQLite and returns the created vehicle. The frontend then navigates back to the admin product list.

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

AutoFixer is currently in the final stage of development.

### Implemented

- Express REST API
- SQLite vehicle database
- Database seeding
- Dynamic vehicle catalogue
- Eight featured homepage vehicles
- Dynamic featured Hero carousel
- Automatic Hero slideshow
- Seamless carousel looping
- Manual carousel navigation
- Responsive Hero layout
- Vehicle class cards
- Vehicle class filtering
- Backend-hosted vehicle images
- Responsive header and navigation
- Mobile navigation drawer
- Expandable vehicle class navigation
- Shopping cart icon
- Search functionality
- Search by vehicle name, manufacturer and class
- Search results page
- Dynamic result count
- Dynamic vehicle detail pages
- Slug-based vehicle routing
- Three dynamic similar vehicle recommendations
- Vehicle card navigation
- Hero vehicle navigation
- Admin product list
- Admin product creation form
- Angular form binding
- POST requests for vehicle creation
- Backend slug generation
- Admin navigation
- Responsive vehicle, class, search, detail and admin layouts
- Responsive site footer
- Project disclaimer

### Still To Come

- Final requirement review
- Final responsive and visual polish
- Final navigation cleanup

## Design

The interface is based on an original Figma design created for the project. It uses a dark, futuristic vehicle marketplace aesthetic inspired by Cyberpunk 2077.

Most vehicle screenshots used throughout the interface were captured in-game specifically for the project. Additional imagery may be used for educational and testing purposes.

## Disclaimer

AutoFixer is a non-commercial student project created for educational purposes.

Cyberpunk 2077 and related vehicle names, designs, imagery and other intellectual property belong to their respective rights holders.
