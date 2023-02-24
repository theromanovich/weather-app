import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';
import { useCityContext } from '../../helpers/city-context';
const API_KEY = '243fd0876f4114a945f94ebbf4f04b79'


const WeatherOutput = () => {
    const {city, setCity, weather, setWeather} = useCityContext();

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(data => {
            setWeather({ icon: data.weather[0].icon, temperature: data.main.temp })
        })
        .catch(error => console.error(error));
    }, [city])        

    useEffect(() => {
        console.log(weather)
    }, [weather])
    
    return (
        <>
            <div className='weather-card'>
                <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`}/>
                <div>
                    {city}
                </div>
                <div>{weather.temperature}</div>
            </div>
        </>



    )
}
export default WeatherOutput