import React from "react";
import rainImage from "../assets/images/rain.png";
import snowImage from "../assets/images/snow.png";
import thunderImage from "../assets/images/thunder.png";
import defaultImage from "../assets/images/default.png"; // Fallback image
import clearImage from "../assets/images/clear.png";
import cloudyImage from "../assets/images/cloudy.png";
import foggyImage from "../assets/images/foggy.png";
import smokeImage from "../assets/images/smoke.png";
import dustImage from "../assets/images/dust.png";

function WeatherCard({ weatherData }) {
  if (!weatherData) return <p>No weather data available</p>;

  const { name, main, weather } = weatherData;

  // Map weather conditions to images
  const getWeatherImage = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return clearImage; // Sunny weather
      case "clouds":
      case "broken clouds":
        return cloudyImage; // Cloudy weather
      case "rain":
      case "drizzle":
        return rainImage; // Rainy or drizzly weather
      case "snow":
        return snowImage; // Snowy weather
      case "thunderstorm":
        return thunderImage; // Thunderstorm
      case "mist":
      case "haze":
      case "fog":
        return foggyImage; // Misty or foggy weather
      case "smoke":
        return smokeImage; // Smoky weather
      case "dust":
      case "sand":
      case "ash":
        return dustImage; // Dusty or sandy weather
      default:
        return defaultImage; // Fallback for unknown conditions
    }
  };

  const weatherCondition = weather[0]?.main || "default";
  const backgroundImage = getWeatherImage(weatherCondition);

  return (
    <div
      className="weather-card-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px", // Adjust height as needed
      }}
    >
      <div
        className="card"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for text legibility
          color: "#333",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Temperature: {main.temp}°C</p>
          <p className="card-text">Weather: {weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
