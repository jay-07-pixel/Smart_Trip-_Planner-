# AI Trip Planner India

**Your intelligent travel companion for exploring Incredible India with AI-powered planning, real-time data, and personalized itineraries.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://smart-tripplanner.netlify.app)
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

- **[Live Website](https://smart-tripplanner.netlify.app)** — Try the app online
- **[Trip Planner](https://smart-tripplanner.netlify.app/trip-planner.html)** — Start planning a trip
- **[GitHub Repository](https://github.com/jay-07-pixel/Smart_Trip-_Planner-)** — Source code

---

## What Makes This Special?

AI Trip Planner India is a smart travel planning platform built for Indian destinations. It helps users create personalized itineraries based on preferences, budget, and travel style.

### Key Highlights

- AI-powered itinerary generation
- India-focused destinations and travel experiences
- Budget planning and category-wise allocation
- Hotel and transport price comparison links
- Weather-aware trip suggestions
- Responsive design for desktop and mobile
- Multiple pages: destinations, experiences, packages, reviews, and pricing

---

## Features

### Smart Trip Planning

- **7 trip types:** Heritage, Adventure, Spiritual, Beach, Wildlife, Food, Shopping
- **3 travel styles:** Relaxed, Balanced, Intense
- Dynamic day-by-day itineraries
- Personalized activity recommendations

### Budget Management

- Total budget control
- Category breakdown: Travel, Stay, Food, Activities, Shopping, Misc
- Budget-aware hotel and activity suggestions

### Price Comparison

- Hotel comparison links for Booking.com, Agoda, and OYO
- Transport comparison links for flights, trains, and buses
- Estimated price ranges and booking tips

### Interactive Experience

- Place details and restaurant information
- Directions with map integration
- Export and share itineraries
- Responsive modals and smooth UI interactions

---

## Technology Stack

### Frontend

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Font Awesome

### Integrations

- Google Maps / Places services
- OpenWeatherMap
- Browser Geolocation API

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Hero section, features, destinations, and how it works |
| Trip Planner | `trip-planner.html` | Main planning form, itinerary generation, budget tools |
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

Visit the **[Live Demo](https://smart-tripplanner.netlify.app)** to use the app immediately.

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

---

## Future Roadmap

### Phase 1 (Current)

- AI itinerary generation
- Real-time data integration
- Budget management
- Responsive UI

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
