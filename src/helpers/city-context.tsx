import { createContext, useContext, useState } from "react";
import React from "react";
import { ReactNode } from "react";

interface Weather {
  temperature?: string;
  pressure?: string;
  windSpeed?: string;
  humidity?: string;
  icon?: string;
  weatherType?: string;
}

interface CityContextType {
  city: string;
  setCity: (city: string) => void;
  weather: Weather;
  setWeather: (weather: Weather) => void;
}

const cityContext = createContext<CityContextType>({
  city: "",
  setCity: () => {},
  weather: {
    temperature: "",
    pressure: "",
    windSpeed: "",
    humidity: "",
    icon: "",
    weatherType: "",
  },
  setWeather: () => {},
});

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const CityProvider: React.FC<Props> = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather>({
    temperature: "",
    pressure: "",
    windSpeed: "",
    humidity: "",
    icon: "",
    weatherType: "",
  });
  return (
    <cityContext.Provider value={{ city, setCity, weather, setWeather }}>
      {children}
    </cityContext.Provider>
  );
};

export const useCityContext = (): CityContextType => {
  return useContext(cityContext);
};

export default CityProvider;
