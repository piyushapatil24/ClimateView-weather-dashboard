function SearchBar() {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search city..."
        className="w-full max-w-md rounded-l-lg p-3 outline-none"
      />

      <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 rounded-r-lg">
        Search
      </button>
    </div>
  );
}

export default SearchBar;