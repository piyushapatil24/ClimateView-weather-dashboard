import { WiDaySunny } from "react-icons/wi";

function WeatherCard() {
  return (
    <div className="bg-slate-800 rounded-xl p-8 text-white mt-10 shadow-xl">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold">
            Mumbai
          </h2>

          <p className="text-slate-400">
            Clear Sky
          </p>

          <h1 className="text-6xl font-bold mt-4">
            31°C
          </h1>

        </div>

        <WiDaySunny
          size={120}
          className="text-yellow-400"
        />

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        <div>
          <p className="text-slate-400">Humidity</p>
          <h3>65%</h3>
        </div>

        <div>
          <p className="text-slate-400">Wind</p>
          <h3>12 km/h</h3>
        </div>

        <div>
          <p className="text-slate-400">Pressure</p>
          <h3>1012 hPa</h3>
        </div>

        <div>
          <p className="text-slate-400">Feels Like</p>
          <h3>33°C</h3>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;