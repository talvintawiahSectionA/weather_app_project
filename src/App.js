import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherData } from "./services/apiService";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (location) => {
    const data = await fetchWeatherData(location);
    setWeatherData(data);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SearchForm onSearch={handleSearch} />
        <div className="weather-container">
          <WeatherCard weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
