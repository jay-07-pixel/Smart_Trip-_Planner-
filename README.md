# AI Trip Planner India

**Your intelligent travel companion for exploring Incredible India with AI-powered planning, real-time data, and personalized itineraries.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://smart-tripplanner.netlify.app/trip-planner)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20Tailwind%20%7C%20JavaScript-38BDF8?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/topics/javascript)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-22C55E?style=for-the-badge)](https://github.com/jay-07-pixel/Smart_Trip-_Planner-)

## Table of Contents

- [Live Demo](#live-demo)
- [What Makes This Special?](#what-makes-this-special)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Pages](#pages)
- [Getting Started](#getting-started)
- [Local Configuration](#local-configuration)
- [Features Breakdown](#features-breakdown)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [Contact](#contact)

---

## Live Demo

- **[Live Website](https://smart-tripplanner.netlify.app)** — Home page
- **[Trip Planner](https://smart-tripplanner.netlify.app/trip-planner)** — Start planning a trip
- **[GitHub Repository](https://github.com/jay-07-pixel/Smart_Trip-_Planner-)** — Source code

> **Note:** After you click **Generate Smart Itinerary**, please wait **30–40 seconds** while the app fetches hotels, restaurants, attractions, weather, and optional traffic data from live APIs.

---

## What Makes This Special?

AI Trip Planner India is a smart travel planning platform built for Indian destinations. It helps users create personalized itineraries based on preferences, budget, and travel style.

### Key Highlights

- AI-powered day-by-day itinerary generation
- Live hotel, restaurant, and attraction data via Google Places API
- Real-time weather forecasts via OpenWeatherMap
- **Historical traffic analysis** with best departure times and 8-day route patterns
- Smart budget planning with category-wise allocation
- Hotel and transport price comparison links
- 7 trip types and 3 travel styles (Relaxed, Balanced, Intense)
- Responsive design for desktop and mobile
- Multiple pages: destinations, experiences, packages, reviews, and pricing

---

## Features

### Smart Trip Planning

- **7 trip types:** Heritage, Adventure, Spiritual, Beach, Wildlife, Food, Shopping
- **3 travel styles:** Relaxed, Balanced, Intense
- **Interests:** Temples, local cuisine, nature, adventure, markets, heritage, wellness, festivals
- Destination, dates, travelers, and special requirements
- Dynamic day-by-day itineraries with personalized activity recommendations
- **Generation time:** Allow **30–40 seconds** for the full itinerary to load

### Live Data Integration

- **Hotels & lodging** — fetched from Google Places API, filtered by budget and rating
- **Restaurants** — real dining options with cuisine type and price level
- **Attractions** — tourist spots tailored to your selected trip type
- **Weather forecast** — trip-date weather with temperature, rain chance, and activity tips
- **Sample data fallback** — if an API is unavailable, the app still generates a usable itinerary

### Historical Traffic Analysis (Optional)

Enable **Traffic Analysis** on the trip planner form to unlock route insights powered by **Google Maps Distance Matrix API**:

- **Route overview** — starting point → destination with baseline travel time
- **Best times to travel** — recommended departure slots with time saved vs. peak traffic
- **Times to avoid** — peak-hour delays highlighted with extra travel time
- **8-day traffic pattern** — color-coded heatmap (green = faster, red = slower) across the last 8 days
- **Real vs. estimated data** — live Google Maps data when available; estimated patterns as fallback
- **Departure time picker** — choose preferred leave time for personalized recommendations

### Budget Management

- Total trip budget with slider control
- Category breakdown: Travel, Stay, Food, Activities, Shopping, Misc
- Real-time allocated vs. remaining budget display
- Budget-aware hotel and restaurant suggestions

### Price Comparison

- **Hotels** — compare across Booking.com, Agoda, and OYO
- **Flights** — MakeMyTrip, Cleartrip, Goibibo, IndiGo
- **Trains** — IRCTC, ConfirmTkt, Trainman, RailYatri
- **Buses** — RedBus, AbhiBus, Paytm, TicketGoose
- One-click open multiple booking sites for side-by-side comparison

### Interactive Experience

- View place details, restaurant menus, and popular dishes
- Get directions via Google Maps integration
- Export and share itineraries
- Location access for real-time travel time estimates
- Responsive modals, loading screen, and smooth UI

---

## Technology Stack

### Frontend

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Font Awesome

### Integrations

- **Google Maps JavaScript API** — maps, geocoding, directions
- **Google Places API** — hotels, restaurants, attractions
- **Google Distance Matrix API** — travel times and historical traffic analysis
- **OpenWeatherMap** — weather forecasts for trip dates
- **Browser Geolocation API** — user location for route planning

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Hero section, features, destinations, and how it works |
| Trip Planner | `trip-planner.html` | Main form, live API itinerary, budget tools, weather, traffic analysis |
| Destinations | `destinations.html` | Popular Indian destinations with filters |
| Experiences | `experiences.html` | Adventure, cultural, wellness, and culinary experiences |
| Packages | `packages.html` | Curated travel packages and offers |
| Reviews | `reviews.html` | Ratings, featured reviews, and review form |
| Pricing | `pricing.html` | Free, Pro, and Enterprise plans |

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection

### Quick Start

1. Open the **[Trip Planner](https://smart-tripplanner.netlify.app/trip-planner)**
2. Fill in destination, dates, budget, trip type, and travel style
3. *(Optional)* Enable **Traffic Analysis** and enter your starting point + departure time
4. Click **Generate Smart Itinerary**
5. Wait **30–40 seconds** for results — a loading screen appears while live data is fetched

Or visit the **[Live Website](https://smart-tripplanner.netlify.app)** and navigate from the home page.

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jay-07-pixel/Smart_Trip-_Planner-.git
   cd Smart_Trip-_Planner-
   ```

2. Open `index.html` in your browser, or run a local server:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`

3. For VS Code users, install the **Live Server** extension and open `index.html` with Live Server.

---

## Local Configuration

Some features in `trip-planner.html` need API credentials on your machine.

1. Copy `js/config.example.js` to `js/config.js`
2. Add your credentials in the local `js/config.js` file
3. Never commit `js/config.js` — it is listed in `.gitignore`

### Netlify Deployment

The live site builds `js/config.js` automatically from environment variables. In your [Netlify site settings](https://app.netlify.com/) go to **Site configuration → Environment variables** and add:

| Variable | Description |
|----------|-------------|
| `GOOGLE_API_KEY` | Google Maps / Places API key |
| `WEATHER_API_KEY` | OpenWeatherMap API key |

Restrict your Google key to HTTP referrers, for example:

- `https://smart-tripplanner.netlify.app/*`
- `http://localhost:*`

After saving the variables, trigger a **new deploy** so the build can generate `js/config.js`.

---

## Features Breakdown

### Trip Types

| Type | Description |
|------|-------------|
| Heritage | Museums, monuments, and cultural sites |
| Adventure | Trekking, water sports, and outdoor activities |
| Spiritual | Temples, meditation, and pilgrimage routes |
| Beach | Coastal activities and seaside experiences |
| Wildlife | Safaris, bird watching, and nature trails |
| Food | Food tours, local cuisine, and culinary experiences |
| Shopping | Markets, crafts, textiles, and souvenirs |

### Budget Categories

- Travel
- Stay
- Food
- Activities
- Shopping
- Misc

### Traffic Analysis Output

When traffic analysis is enabled, the itinerary includes:

| Section | Description |
|---------|-------------|
| Route summary | Starting point → destination with baseline travel time |
| Best times to travel | Top departure slots with time saved (e.g. 06:00 — Save 1h 26m) |
| Times to avoid | Peak-hour slots with extra delay (e.g. 18:00 — +1h 32m) |
| 8-day traffic pattern | Heatmap grid by time slot and day (06:00, 08:00, 12:00, 17:00, 19:00) |
| Data indicators | ✅ Real Google Maps data · ⚠️ Estimated when API unavailable |

---

## Future Roadmap

### Phase 1 (Current)

- AI itinerary generation with live Google Places data
- Real-time weather integration (OpenWeatherMap)
- Historical traffic analysis with 8-day route patterns
- Budget management and price comparison links
- Responsive UI across all pages

### Phase 2 (Planned)

- Mobile app
- Offline support
- Multi-language support
- Price alerts

### Phase 3 (Future)

- AI chatbot assistant
- Direct booking integration
- Social sharing features
- Route optimization

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test in multiple browsers and screen sizes
5. Commit with a clear message
6. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgments

- Tailwind CSS
- Font Awesome
- Indian travel community for inspiration and feedback

---

## Support

- **Website:** [https://smart-tripplanner.netlify.app](https://smart-tripplanner.netlify.app)
- **Trip Planner:** [https://smart-tripplanner.netlify.app/trip-planner](https://smart-tripplanner.netlify.app/trip-planner)
- **GitHub Issues:** [Report bugs or request features](https://github.com/jay-07-pixel/Smart_Trip-_Planner-/issues)
- **Discussions:** [Suggest new features](https://github.com/jay-07-pixel/Smart_Trip-_Planner-/discussions)

---

## Contact

For questions, feedback, or collaboration:

| Name | Email |
|------|-------|
| **Jay Jobanputra** | [jayjobanputra007@gmail.com](mailto:jayjobanputra007@gmail.com) |
| **Divya Warule** | [divya.warule24@sanjivani.edu.in](mailto:divya.warule24@sanjivani.edu.in) |

---

**Made with love for Incredible India**

*Plan your dream Indian adventure with the power of AI.*
