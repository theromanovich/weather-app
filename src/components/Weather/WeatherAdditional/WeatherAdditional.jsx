import { useCityContext } from "../../../helpers/city-context"
const WeatherAdditional = () => {
    const { weather } = useCityContext()
    const {humidity, pressure} = weather
    return (
        <div className="weather-additional">
            <div className="humidity">
                <div>
                    Вологість:
                </div>
                {humidity}
            </div>
           <div className="pressure">
                <div>
                    Тиск:  
                </div>
                <div>
                {pressure}
                </div>
           </div>
        </div>
    )
}
export default WeatherAdditional