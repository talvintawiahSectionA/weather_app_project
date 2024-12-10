export const fetchWeatherData = async (location) => {
  const API_KEY = "15563919aab71c1425661517ba554d87";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  try {
    const response = await fetch(
      `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Error fetching weather data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchForecastData = async (lat, lon) => {
  const API_KEY = "15563919aab71c1425661517ba554d87";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Error fetching forecast data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
