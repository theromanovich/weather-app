import React from "react";
import { useCityContext } from "../../../helpers/city-context";
const WeatherAdditional: React.FC = () => {
  const { weather } = useCityContext();
  const { humidity, pressure, windSpeed } = weather;
  return (
    <div className="weather-additional">
      <div className="humidity">
        <div>Humidity:</div>
        <span>{humidity}%</span>
      </div>
      <div className="pressure">
        <div>Pressure:</div>
        <div>
          <span>{pressure} mm Hg</span>
        </div>
      </div>
      <div className="wind">
        <div>Wind speed:</div>
        <div>
          <span>{windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
};
export default WeatherAdditional;
