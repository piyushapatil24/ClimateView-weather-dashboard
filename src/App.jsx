import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">

      <div className="max-w-5xl mx-auto px-5 py-10">

        <h1 className="text-5xl text-center text-white font-bold">
          Weather Dashboard
        </h1>

        <SearchBar />

        <WeatherCard />

        <Forecast />

      </div>

    </div>
  );
}

export default App;