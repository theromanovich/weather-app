import { useCityContext } from "../../../helpers/city-context"
const WeatherAdditional = () => {
    const { weather } = useCityContext()
    const {humidity, pressure, windSpeed} = weather
    return (
        <div className="weather-additional">
            <div className="humidity">
                <div>
                    Вологість:
                </div>
                    {humidity}%
            </div>
           <div className="pressure">
                <div>
                    Тиск:  
                </div>
                <div>
                    {pressure} мм. рт. ст.
                </div>
           </div>
           <div className="wind">
                <div>
                    Швидкість вітру:
                </div>
                <div>
                    {windSpeed} м/с
                </div>
           </div>
        </div>
    )
}
export default WeatherAdditional