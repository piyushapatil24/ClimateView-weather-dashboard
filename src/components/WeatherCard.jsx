function WeatherCard({ weather, darkMode }) {
  if (!weather) return null;

  const icon = weather.weather[0].icon;

  return (
    <div
      className={`rounded-xl p-8 mt-10 shadow-xl ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">
            {weather.name}, {weather.sys.country}
          </h2>

          <p
            className={`capitalize ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {weather.weather[0].description}
          </p>

          <h1 className="text-6xl font-bold mt-4">
            {Math.round(weather.main.temp)}°C
          </h1>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="Weather Icon"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Humidity
          </p>
          <h3>{weather.main.humidity}%</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Wind
          </p>
          <h3>{weather.wind.speed} m/s</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Pressure
          </p>
          <h3>{weather.main.pressure} hPa</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Feels Like
          </p>
          <h3>{Math.round(weather.main.feels_like)}°C</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Visibility
          </p>
          <h3>{weather.visibility / 1000} km</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Min Temp
          </p>
          <h3>{Math.round(weather.main.temp_min)}°C</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Max Temp
          </p>
          <h3>{Math.round(weather.main.temp_max)}°C</h3>
        </div>

        <div>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Clouds
          </p>
          <h3>{weather.clouds.all}%</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;