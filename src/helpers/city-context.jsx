import { createContext, useContext, useState } from "react";


const cityContext = createContext()

const CityProvider = ({children}) => {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({
      temperature: '',
      pressure: '',
      windSpeed: '',
      humidity: '',
      icon: '',
      weatherType: ''
  })
  return (
    <cityContext.Provider value={{city, setCity, weather, setWeather}}>
        {children}
    </cityContext.Provider>
  )
}

export const useCityContext = () =>  {
  return useContext(cityContext)
}

export default CityProvider

