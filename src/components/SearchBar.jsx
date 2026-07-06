import { useEffect, useState } from "react";
import { getCitySuggestions } from "../services/weatherApi";

function SearchBar({ onSearch, onLocation, darkMode }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const data = await getCitySuggestions(city);
        setSuggestions(data);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(fetchSuggestions, 300);

    return () => clearTimeout(timer);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);

    setSuggestions([]);
  };

  const handleSuggestionClick = (selectedCity) => {
    setCity(selectedCity.name);

    onSearch(selectedCity.name);

    setSuggestions([]);
  };

  return (
    <div className="mt-8 relative">

      <form
        onSubmit={handleSubmit}
        className="flex gap-3"
      >
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={`flex-1 p-3 rounded-lg border outline-none ${
            darkMode
              ? "bg-slate-800 text-white border-slate-700"
              : "bg-white text-slate-900 border-gray-300"
          }`}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
        >
          Search
        </button>

        <button
          type="button"
          onClick={onLocation}
          className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-lg"
        >
          📍
        </button>
      </form>

      {suggestions.length > 0 && (
        <div
          className={`absolute left-0 right-0 mt-2 rounded-lg shadow-lg z-50 ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900"
          }`}
        >
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(item)}
              className="p-3 cursor-pointer hover:bg-blue-500 hover:text-white transition"
            >
              {item.name}
              {item.state ? `, ${item.state}` : ""}
              {" - "}
              {item.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;