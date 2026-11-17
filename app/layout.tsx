import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'WeatherWise | Forecast & Explore',description:'Weather forecasts, nearby attractions and weather-friendly activities.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
