function Forecast({ forecast, darkMode }) {
  if (!forecast) return null;

  const dailyForecast = forecast.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="mt-10">
      <h2
        className={`text-2xl font-bold mb-5 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecast.slice(0, 5).map((day) => (
          <div
            key={day.dt}
            className={`rounded-xl p-5 text-center shadow-lg ${
              darkMode
                ? "bg-slate-800 text-white"
                : "bg-white text-slate-900"
            }`}
          >
            <h3 className="font-bold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h3>

            <img
              className="mx-auto"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Weather"
            />

            <p className="capitalize text-sm">
              {day.weather[0].description}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {Math.round(day.main.temp)}°C
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;