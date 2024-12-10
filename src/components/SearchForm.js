import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (location) onSearch(location);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
