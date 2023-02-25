import WeatherInput from "./WeatherInput/WeatherInput"
import WeatherOutput from "./WeatherOutput/WeatherOutput"
import WeatherAdditional from "./WeatherAdditional/WeatherAdditional"
const Weather = () => {
  return (
     <div className="weather">
        <WeatherInput/>
        <WeatherOutput/>
        <WeatherAdditional/>
    </div>
  )
}
export default Weather