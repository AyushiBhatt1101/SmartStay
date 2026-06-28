# SmartStay

SmartStay is a responsive homestay management web application designed to simplify property listings, booking management, and guest interactions. The project is being developed as part of the TBI GEU Summer Internship Program 2026 and focuses on creating a modern, user-friendly platform for homestay owners and travelers.

## Features

### Homestay Listings

* Browse featured homestays in a responsive grid layout.
* View essential details such as location, pricing, and availability.
* Clean and user-friendly card-based design.

### Property Details

* Dedicated detail pages for individual homestays.
* Display accommodation information, amenities, and pricing details.

### Authentication UI

* Login page for existing users.
* Registration page for new users.
* Form-based user interface for future authentication integration.

### Host Dashboard

* Booking statistics and occupancy insights.
* Recent bookings table.
* Dashboard widgets and summary cards.

### Responsive Design

* Mobile View (375px)
* Tablet View (768px)
* Desktop View (1440px)

### Dark / Light Mode

* Theme toggle functionality.
* Theme preference stored in localStorage.
* Consistent experience across all pages and components.

### Reusable UI Component Library

Located in `src/components/ui`

* Button Component
* Input Component
* Modal Component
* Toast Component
* Loader Component

All components are reusable, documented using JSDoc comments, and designed to support future scalability.

---

## Pages

### Home

Landing page featuring:

* Navbar
* Hero Section
* Featured Homestays
* Feature Highlights
* Footer

### Login

User authentication interface.

### Register

New user registration interface.

### Listings

Browse available homestays.

### Details

Detailed view of a selected homestay.

### Dashboard

Host management dashboard with metrics and booking information.

### About

Information about the SmartStay platform.

### Not Found

Fallback page for invalid routes.

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS

### Development Tools

* Git
* GitHub
* VS Code

---

## Week 3 Deliverables

### Figma Wireframes

Created low-fidelity wireframes for:

* Home Screen
* Dashboard
* Listings / Detail View
* Login / Signup
* AI Feature Screen

### Component Library

Implemented:

* Button
* Input
* Modal
* Toast
* Loader

### Responsive Testing

Verified layouts across:

* Mobile (375px)
* Tablet (768px)
* Desktop (1440px)

### Theme Support

Implemented:

* Dark Mode
* Light Mode
* Persistent theme preference using localStorage

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/AyushiBhatt1101/SmartStay.git
```

### Navigate to Project Directory

```bash
cd SmartStay
```

### Install Dependencies

```bash
npm install
```

### Start Frontend Development Server

From the project root, run:

```bash
npm install
npm start
```

The frontend will be available at `http://localhost:3000`.

### How to run backend locally

Open a new terminal in the project root and run:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend server will start at `http://localhost:5000`.

Useful notes:

- The backend uses Express and serves homestay data through API endpoints such as `/api/homestays` and `/api/homestays/:id`.
- The default port is `5000`, and it can be changed using the `PORT` variable in the backend `.env` file.
- The frontend is configured to connect to the backend via `FRONTEND_URL` in the backend environment settings.

If you want to run the backend in production mode:

```bash
cd backend
npm start
```

---

## Future Enhancements

* Backend integration using Node.js and Express
* Database connectivity with MongoDB Atlas
* User authentication and authorization
* Booking management system
* Payment gateway integration
* AI-powered review analysis
* Personalized homestay recommendations
* Trip planning assistance

---

## Author

Ayushi Bhatt
B.Tech Computer Science Engineering
TBI GEU Summer Internship Program 2026
