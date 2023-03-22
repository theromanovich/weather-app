import React from "react";
import { useCityContext } from "../../helpers/city-context";
import WeatherInput from "./WeatherInput/WeatherInput";
import WeatherOutput from "./WeatherOutput/WeatherOutput";
import WeatherAdditional from "./WeatherAdditional/WeatherAdditional";
import ChangeBg from "../ChangeBg/ChangeBg";
const Weather = () => {
  const { city } = useCityContext();
  return (
    <div className="weather">
      <ChangeBg />
      <WeatherInput />
      <WeatherOutput />
      {city && <WeatherAdditional />}
    </div>
  );
};
export default Weather;
