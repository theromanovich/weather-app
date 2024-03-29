import React from "react";
import { useEffect } from "react";
import { useCityContext } from "../../../helpers/city-context";
const API_KEY = "243fd0876f4114a945f94ebbf4f04b79";

const WeatherOutput: React.FC = () => {
  const { city, setCity, weather, setWeather } = useCityContext();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        if (response.status !== 200) {
          setCity("");
          setWeather({});
        }
        return response.json();
      })
      .then((data) => {
        setWeather({
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          weatherType: data.weather[0].description,
        });
      });
  }, [city]);

  return (
    <>
      <div className="weather-card">
        {city ? (
          <>
            <div className="weather-card__descr">{weather.weatherType}</div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
            />
            <div className="city">{city}</div>
            <div className="temperature">{`${weather.temperature} C`}</div>
          </>
        ) : (
          <span className="waiting">Please enter city</span>
        )}
      </div>
    </>
  );
};
export default WeatherOutput;
