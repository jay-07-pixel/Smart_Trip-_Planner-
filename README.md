# AI Trip Planner India

**Your intelligent travel companion for exploring Incredible India — smart itinerary planning with live data and personalized recommendations.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://smart-tripplanner.netlify.app/trip-planner)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20Tailwind%20%7C%20JavaScript-38BDF8?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/topics/javascript)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-22C55E?style=for-the-badge)](https://github.com/jay-07-pixel/Smart_Trip-_Planner-)

## Table of Contents

- [Live Demo](#live-demo)
- [What Makes This Special?](#what-makes-this-special)
- [Trip Planner Features](#trip-planner-features)
- [Other Pages](#other-pages)
- [Technology Stack](#technology-stack)
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
- **[Trip Planner](https://smart-tripplanner.netlify.app/trip-planner)** — Main app (fully functional)
- **[GitHub Repository](https://github.com/jay-07-pixel/Smart_Trip-_Planner-)** — Source code

> **Note:** After you click **Generate Smart Itinerary**, please wait **30–40 seconds** while the app fetches hotels, restaurants, attractions, weather, and optional traffic data from live APIs.

---

## What Makes This Special?

AI Trip Planner India combines **live API data** (Google Places, OpenWeatherMap, Google Maps) with **smart rule-based itinerary logic** to build personalized Indian travel plans based on destination, budget, trip type, and travel style.

> The core trip planner uses real-time APIs plus template-driven planning — not a third-party LLM API.

### Key Highlights

- Smart day-by-day itinerary generation (up to **5 days** per trip in the output)
- Live hotel, restaurant, and attraction data via **Google Places API**
- Real-time weather forecasts via **OpenWeatherMap**
- **Historical traffic analysis** with best departure times and 8-day route patterns
- Budget planning with 6 category sliders and live allocation tracking
- External booking and price-comparison links (hotels, flights, trains, buses, food delivery)
- **8 trip types** and **3 travel styles** (Relaxed, Balanced, Intense)
- Responsive design for desktop and mobile
- Marketing pages: destinations, experiences, packages, reviews, and pricing

---

## Trip Planner Features

The main app lives in `trip-planner.html` and is the **only fully interactive** page.

### Trip Form

| Input | Used in generation |
|-------|-------------------|
| Destination | ✅ Places, weather, geocoding, itinerary |
| Trip type (8 options) | ✅ Attractions and day activities |
| Start / end dates | ✅ Trip length, weather, hotel nights |
| Travel style (Relaxed / Balanced / Intense) | ✅ Activity pace and day titles |
| Total budget + 6 category sliders | ✅ Filtering and budget breakdown |
| Traffic analysis (optional) | ✅ Starting point, departure time, route heatmap |
| Number of travelers | ❌ UI only (not used in logic yet) |
| Interests checkboxes | ❌ UI only (not used in logic yet) |
| Special requirements | ❌ UI only (not used in logic yet) |

**Trip types:** Heritage, Adventure, Spiritual, Beach, Wildlife, Food, Shopping, **Family & Kids**

**Interests (displayed on form):** Temples, local cuisine, nature, adventure, markets, heritage, wellness, festivals

### Live Data Integration

- **Hotels & lodging** — Google Places text search, filtered by budget and rating
- **Restaurants** — dining options with cuisine type and price level
- **Attractions** — spots tailored to selected trip type
- **Weather forecast** — trip-date weather with temperature, rain chance, and activity tips
- **Sample data fallback** — if an API fails, the app still generates a usable itinerary with a warning banner

### Historical Traffic Analysis (Optional)

Enable **Traffic Analysis** on the form to unlock route insights via **Google Distance Matrix API**:

- **Route overview** — starting point → destination with baseline travel time
- **Best times to travel** — recommended slots with time saved vs. peak traffic
- **Times to avoid** — peak-hour delays with extra travel time
- **8-day traffic pattern** — color-coded heatmap (green = faster, red = slower)
- **Real vs. estimated data** — ✅ live Google Maps data when available; ⚠️ estimated fallback
- **Departure time picker** — 6:00 AM to 8:00 PM slots

### Budget Management

- Total trip budget input with 6 sliders: Travel, Stay, Food, Activities, Shopping, Misc
- Real-time **allocated vs. remaining** budget with color-coded status
- Budget mismatch warning when sliders exceed total budget
- Budget-aware hotel and restaurant filtering by price level

### Transportation Recommendations

- Flight, train, and bus option cards with estimated prices and pros/cons
- Budget suitability hints based on your travel allocation
- **View Options & Book** opens external booking sites in new tabs

### Price Comparison & Booking Links

Opens external sites with estimated prices (not live fare scraping):

| Category | Platforms |
|----------|-----------|
| **Hotels** | Booking.com, Agoda, OYO, MakeMyTrip, Goibibo, Hotels.com |
| **Flights** | MakeMyTrip, Cleartrip, Goibibo, IndiGo |
| **Trains** | IRCTC, ConfirmTkt, Trainman, RailYatri |
| **Buses** | RedBus, AbhiBus, Paytm, TicketGoose |
| **Food delivery** | Zomato, Swiggy, Dunzo, Uber Eats, Foodpanda |

### Interactive Modals & Actions

- **View hotel details** — amenities, directions, book-now links
- **View restaurant menu** — cuisine-based popular dishes (synthetic menus, not live API menus)
- **Get directions** — Google Maps / Apple Maps, geolocation, copy address
- **Order online** — food delivery platform links
- **Compare all hotel sites** — opens multiple booking tabs at once
- **Enable location** — browser geolocation for real-time travel times
- **Loading overlay** — step-by-step progress while APIs fetch data

### Itinerary Output Includes

- Trip header with destination, dates, trip type, and travel style
- Budget breakdown with per-category amounts
- Transportation options and booking comparison cards
- Weather summary for trip dates
- Traffic analysis section (when enabled)
- Day-by-day plans (morning / afternoon activities) — **max 5 days displayed**
- Top hotel, restaurant, and attraction recommendations from Google Places
- Hotel price comparison (Booking.com, Agoda, OYO)

---

## Other Pages

These pages are **marketing and showcase UIs** with animations and static content. Most buttons (Sign In, Book Now, filters, review submit) are decorative and not wired to a backend.

| Page | File | What it actually does |
|------|------|----------------------|
| Landing | `index.html` | Hero, particle effects, feature cards, how-it-works, CTA to trip planner |
| Destinations | `destinations.html` | Destination cards, animated map pins, category chips (visual only) |
| Experiences | `experiences.html` | Flip cards, experience carousel, curated listings |
| Packages | `packages.html` | Package cards, filter panel UI (filters animate but don't hide cards) |
| Reviews | `reviews.html` | Rating display, testimonial carousel, review form (no submit/backend) |
| Pricing | `pricing.html` | Free / Pro / Enterprise plan cards, comparison table, FAQ (no payment gating) |

---

## Technology Stack

### Frontend

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Font Awesome
- GSAP animations (landing and secondary pages)

### Integrations (Trip Planner)

- **Google Maps JavaScript API** — maps, geocoding, directions
- **Google Places API** — hotels, restaurants, attractions (browser-side PlacesService)
- **Google Distance Matrix API** — travel times and traffic analysis
- **OpenWeatherMap** — weather forecasts (via CORS proxy for browser requests)
- **Browser Geolocation API** — user location for directions

### Deployment

- **Netlify** — static hosting with build-time `js/config.js` generation from environment variables

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection
- API keys for full trip planner functionality (see [Local Configuration](#local-configuration))

### Quick Start

1. Open the **[Trip Planner](https://smart-tripplanner.netlify.app/trip-planner)**
2. Fill in destination, dates, budget, trip type, and travel style
3. *(Optional)* Enable **Traffic Analysis** and enter starting point + departure time
4. Click **Generate Smart Itinerary**
5. Wait **30–40 seconds** — loading screen shows while live data is fetched

Or visit the **[Live Website](https://smart-tripplanner.netlify.app)** and click **Get Started**.

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jay-07-pixel/Smart_Trip-_Planner-.git
   cd Smart_Trip-_Planner-
   ```

2. Copy `js/config.example.js` to `js/config.js` and add your API keys

3. Run a local server:
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000/trip-planner.html`

---

## Local Configuration

1. Copy `js/config.example.js` to `js/config.js`
2. Add your credentials in `js/config.js`
3. Never commit `js/config.js` — it is listed in `.gitignore`

### Netlify Deployment

Add environment variables in [Netlify site settings](https://app.netlify.com/) → **Site configuration → Environment variables**:

| Variable | Description |
|----------|-------------|
| `GOOGLE_API_KEY` | Google Maps / Places API key |
| `WEATHER_API_KEY` | OpenWeatherMap API key |

Restrict your Google key to HTTP referrers:

- `https://smart-tripplanner.netlify.app/*`
- `http://localhost:*`

Enable in Google Cloud: **Maps JavaScript API**, **Places API**, **Geocoding API**, **Distance Matrix API**, and link billing to your project.

After saving variables, trigger a **new deploy**.

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
| Family & Kids | Family-friendly destinations and activities |

### Budget Categories

- Travel
- Stay
- Food
- Activities
- Shopping
- Misc

### Traffic Analysis Output

| Section | Description |
|---------|-------------|
| Route summary | Starting point → destination with baseline travel time |
| Best times to travel | Top slots with time saved (e.g. 06:00 — Save 1h 26m) |
| Times to avoid | Peak slots with extra delay (e.g. 18:00 — +1h 32m) |
| 8-day traffic pattern | Heatmap: 06:00, 08:00, 12:00, 17:00, 19:00 per day |
| Data indicators | ✅ Real Google Maps data · ⚠️ Estimated when API unavailable |

---

## Future Roadmap

### Phase 1 (Current) ✅

- Smart itinerary generation with live Google Places data
- Weather integration (OpenWeatherMap)
- Historical traffic analysis with 8-day patterns
- Budget management and external booking links
- Responsive UI across all pages

### Phase 2 (Planned)

- Use interests, travelers, and special requirements in generation logic
- Export itineraries (PDF / calendar)
- Share itineraries via link
- Mobile app and offline support
- Multi-language support

### Phase 3 (Future)

- LLM-powered AI recommendations
- Direct in-app booking (no redirect)
- Pricing tier enforcement
- Group / collaborative trip planning
- Route optimization

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Make your changes and test in multiple browsers
4. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgments

- Google Maps Platform, OpenWeatherMap
- Tailwind CSS, Font Awesome, GSAP
- Indian travel community for inspiration and feedback

---

## Support

- **Website:** [https://smart-tripplanner.netlify.app](https://smart-tripplanner.netlify.app)
- **Trip Planner:** [https://smart-tripplanner.netlify.app/trip-planner](https://smart-tripplanner.netlify.app/trip-planner)
- **GitHub Issues:** [Report bugs](https://github.com/jay-07-pixel/Smart_Trip-_Planner-/issues)
- **Discussions:** [Suggest features](https://github.com/jay-07-pixel/Smart_Trip-_Planner-/discussions)

---

## Contact

| Name | Email |
|------|-------|
| **Jay Jobanputra** | [jayjobanputra007@gmail.com](mailto:jayjobanputra007@gmail.com) |
| **Divya Warule** | [divya.warule24@sanjivani.edu.in](mailto:divya.warule24@sanjivani.edu.in) |

---

**Made with love for Incredible India**

*Plan your dream Indian adventure with smart data-driven planning.*
