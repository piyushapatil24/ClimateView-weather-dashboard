function WeatherCard({ weather }) {
  if (!weather) return null;

  const icon = weather.weather[0].icon;

  return (
    <div className="bg-slate-800 rounded-xl p-8 text-white mt-10 shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{weather.name}</h2>

          <p className="text-slate-400 capitalize">
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
          <p className="text-slate-400">Humidity</p>
          <h3>{weather.main.humidity}%</h3>
        </div>

        <div>
          <p className="text-slate-400">Wind</p>
          <h3>{weather.wind.speed} m/s</h3>
        </div>

        <div>
          <p className="text-slate-400">Pressure</p>
          <h3>{weather.main.pressure} hPa</h3>
        </div>

        <div>
          <p className="text-slate-400">Feels Like</p>
          <h3>{Math.round(weather.main.feels_like)}°C</h3>
        </div>

        <div>
          <p className="text-slate-400">Visibility</p>
          <h3>{weather.visibility / 1000} km</h3>
        </div>

        <div>
          <p className="text-slate-400">Min Temp</p>
          <h3>{Math.round(weather.main.temp_min)}°C</h3>
        </div>

        <div>
          <p className="text-slate-400">Max Temp</p>
          <h3>{Math.round(weather.main.temp_max)}°C</h3>
        </div>

        <div>
          <p className="text-slate-400">Clouds</p>
          <h3>{weather.clouds.all}%</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;