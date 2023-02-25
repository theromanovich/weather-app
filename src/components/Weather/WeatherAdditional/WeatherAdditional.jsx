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
                    <span>{humidity}%</span>
            </div>
           <div className="pressure">
                <div>
                    Тиск:  
                </div>
                <div>
                    <span>{pressure} мм. рт. ст.</span>
                </div>
           </div>
           <div className="wind">
                <div>
                    Швидкість вітру:
                </div>
                <div>
                    <span>{windSpeed} м/с</span>
                </div>
           </div>
        </div>
    )
}
export default WeatherAdditional