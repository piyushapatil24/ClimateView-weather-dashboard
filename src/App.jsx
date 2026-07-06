import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";

import {
  getWeather,
  getForecast,
} from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

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

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-5xl font-bold text-white text-center">
          Weather Dashboard
        </h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <Loading />}

        {error && (
          <p className="text-center text-red-500 mt-5 capitalize">
            {error}
          </p>
        )}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />

            <Forecast forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;