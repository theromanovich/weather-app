import WeatherInput from "./WeatherInput/WeatherInput"
import WeatherOutput from "./WeatherOutput/WeatherOutput"
const Weather = () => {
  return (
    <div className="weather">
         <WeatherInput/>
        <WeatherOutput/>
    </div>
  )
}
export default Weather