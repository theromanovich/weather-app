import { useCityContext } from "../../helpers/city-context"
import WeatherInput from "./WeatherInput/WeatherInput"
import WeatherOutput from "./WeatherOutput/WeatherOutput"
import WeatherAdditional from "./WeatherAdditional/WeatherAdditional"
const Weather = () => {
  const {city} = useCityContext()
  return (
     <div className="weather">
        <WeatherInput/>
        <WeatherOutput/>
        {city && <WeatherAdditional/>}
    </div>
  )
}
export default Weather