import { useState } from "react";

function SearchBar({ onSearch, onLocation }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);

    setCity("");
  };

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-3">

      <form
        onSubmit={handleSubmit}
        className="flex flex-1"
      >
        <input
          type="text"
          placeholder="Search City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 p-3 rounded-l-lg outline-none"
        />

        <button
          className="bg-sky-500 hover:bg-sky-600 px-6 text-white rounded-r-lg"
        >
          Search
        </button>
      </form>

      <button
        onClick={onLocation}
        className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-lg"
      >
        📍 My Location
      </button>

    </div>
  );
}

export default SearchBar;