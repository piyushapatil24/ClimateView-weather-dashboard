import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);

    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-8"
    >
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full max-w-md rounded-l-lg p-3 outline-none"
      />

      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 text-white px-6 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;