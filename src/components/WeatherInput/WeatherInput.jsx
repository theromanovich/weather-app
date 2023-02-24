import { useRef } from "react";
import { useCityContext } from "../../helpers/city-context";

const WeatherInput = () => {
  const cityInput = useRef()
  const {city, setCity, weather, setWeather} = useCityContext();

  const setNewCity = (e)  => {
    e.preventDefault()
    setCity(cityInput.current.value)
    cityInput.current.value = ''
  }


  return (
    <form onSubmit={setNewCity}>
        <input type="text" ref={cityInput} />
        <button>submit</button>
    </form>
  )
}
export default WeatherInput