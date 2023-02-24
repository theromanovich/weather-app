import { createContext, useContext, useState } from "react";

const cityContext = createContext()
const [city, setcity] = useState('')
const [weather, setWeather] = useState({})

const CityProvider = ({children}) => {
  return (
    <cityContext.Provider value={{city, setcity, weather, setWeather}}>
        {children}
    </cityContext.Provider>
  )
}

export const useCityContext = () =>  {
  return useContext(cityContext)
}

export default CityProvider

