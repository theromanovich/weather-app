import { useCityContext } from "../../../helpers/city-context"
const WeatherAdditional = () => {
    const { weather } = useCityContext()
    const {humidity, pressure} = weather
    return (
        <div className="weather-additional">
            <div className="humidity">
                {humidity}
            </div>
           <div className="pressure">
                {pressure}
           </div>
        </div>
    )
}
export default WeatherAdditional