import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";

import {
  getWeather,
  getForecast,
  getWeatherByCoords,
  getForecastByCoords,
} from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setWeather(null);
      setForecast(null);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);

          const { latitude, longitude } = position.coords;

          const weatherData = await getWeatherByCoords(
            latitude,
            longitude
          );

          const forecastData = await getForecastByCoords(
            latitude,
            longitude
          );

          setWeather(weatherData);
          setForecast(forecastData);
        } catch {
          setError("Unable to fetch location weather.");
        } finally {
          setLoading(false);
        }
      },
      () => setError("Location permission denied.")
    );
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-slate-900" : "bg-sky-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
  <h1
    className={`text-5xl font-bold ${
      darkMode ? "text-white" : "text-slate-900"
    }`}
  >
    🌤 ClimateView
  </h1>

  <p
    className={`mt-2 text-lg ${
      darkMode ? "text-gray-400" : "text-gray-600"
    }`}
  >
    Real-Time Weather Dashboard
  </p>
</div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <SearchBar
          onSearch={handleSearch}
          onLocation={handleCurrentLocation}
          darkMode={darkMode}
        />

        {loading && <Loading />}

        {error && (
          <p className="text-center text-red-500 mt-5 capitalize">
            {error}
          </p>
        )}

        {weather && !loading && (
          <>
            <WeatherCard
             weather={weather}
             darkMode={darkMode} />
            <Forecast
  forecast={forecast}
  darkMode={darkMode}
/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;