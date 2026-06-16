# SmartStay

SmartStay is a React web application for showcasing and managing homestay bookings with a polished UI built using Tailwind CSS.

## Features

- **Listing Browsing**: View a curated set of homestays in a responsive listing page.
- **Detailed Homestay Pages**: See full details, amenities, pricing, and booking actions for each property.
- **Authentication UI**: Login and register pages with form-driven UI states.
- **Host Dashboard**: Display static host metrics and recent bookings in dashboard format.
- **Static Sample Data**: The current version uses hardcoded sample homestay and dashboard data.

## Pages

- **Home**: Landing page with hero section, featured homestays, feature cards, and footer.
- **Login**: Authentication form UI for returning users.
- **Register**: New account registration form UI.
- **Listings**: Grid of available homestays with navigation to details.
- **Details**: Detailed property page for a selected homestay.
- **Dashboard**: Host dashboard with metrics and recent bookings.
- **About**: Informational page about the app.
- **NotFound**: Fallback route for unknown URLs.

## Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smartstay.git
   ```
2. Navigate to the project directory:
   ```bash
   cd smartstay
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Tech Stack

- **Frontend**: React
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build**: Create React App

## Notes

- The application currently uses static sample data for listings, details, and dashboard metrics.
- Authentication and booking workflows are UI-only placeholders and do not connect to a backend yet.

## Learnings

This project is useful for practicing:

- React component composition
- Routing with `react-router-dom`
- Styling with Tailwind CSS
- Building responsive UI layouts
