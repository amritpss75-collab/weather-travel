# WeatherWise — Weather & Travel Planner

A responsive Next.js weather forecast and travel ideas app ready for GitHub and Vercel.

## Features
- Search for cities globally; optionally filter search results by country and state/region.
- Current weather, 7-day daily forecast, 16-day weekly outlook.
- Monthly planning view honestly shows the available 16-day horizon rather than inventing 30-day predictions.
- Nearby places to visit (OpenStreetMap/Overpass, ~12 km radius).
- Weather-based activity suggestions.
- No API keys or database required.

## Run locally
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy with GitHub + Vercel
1. Extract this ZIP and create a new GitHub repository.
2. Upload/push the extracted files to the repository root (not the enclosing folder).
3. In Vercel, click **Add New → Project**, import the GitHub repository.
4. Vercel detects **Next.js** automatically. Click **Deploy**.
5. No environment variables required.

## Data providers & limitations
- **Open-Meteo**: current conditions and up to 16-day daily forecast. Forecast beyond 16 days is intentionally not shown. Open-Meteo's free access is intended for non-commercial use; check licensing/terms for production/commercial usage.
- **Open-Meteo Geocoding**: city lookup; country and state text fields filter returned search results. They are not comprehensive hierarchical country/state directories.
- **OpenStreetMap Overpass**: nearby attractions. Public Overpass instances are community-operated and may rate-limit or fail; the UI handles outages gracefully. Check OSM attribution and acceptable use for higher traffic.
- Activities are simple weather-based rules, not AI-generated recommendations. Check official local severe weather alerts before outdoor activities.
- The initial location is Delhi as a demo; user location permissions are not required.

## Project layout
- `app/page.tsx` — frontend
- `app/globals.css` — responsive styling
- `app/api/locations/route.ts` — city search proxy
- `app/api/weather/route.ts` — forecast proxy
- `app/api/places/route.ts` — attraction search proxy
- `lib/weather.ts` — weather descriptions and activity logic

## Improvements for later
Full country→state→city dependent selectors, maps, saved cities, hourly forecasts, severe weather alerts, and a commercial-ready POI provider.
