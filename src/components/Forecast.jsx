function Forecast() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
      {days.map((day) => (
        <div
          key={day}
          className="bg-slate-800 text-white rounded-xl p-4 text-center"
        >
          <h3 className="font-bold">{day}</h3>

          <p className="text-3xl mt-3">☀️</p>

          <p className="mt-3">30°C</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;