import React from "react";
import { useRef } from "react";
import { useCityContext } from "../../../helpers/city-context";

const WeatherInput: React.FC = () => {
  const cityInput = useRef<HTMLInputElement>(null!);
  const { city, setCity, weather, setWeather } = useCityContext();

  const setNewCity = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(cityInput.current.value.toLowerCase());
    cityInput.current.value = "";
  };

  return (
    <form className="weather-input" onSubmit={setNewCity}>
      <input type="text" ref={cityInput} placeholder="Enter city" />
      <button>submit</button>
    </form>
  );
};
export default WeatherInput;
