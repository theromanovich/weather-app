import { useState } from 'react'
import reactLogo from './assets/react.svg'
import WeatherOutput from './components/WeatherOutput/WeatherOutput'
import WeatherInput from './components/WeatherInput/WeatherInput'
import CityProvider from './helpers/city-context'
function App() {

  return (
    <>
    <CityProvider>
      <WeatherInput/>
      <WeatherOutput/>
    </CityProvider>
    </>
  )
}


export default App
