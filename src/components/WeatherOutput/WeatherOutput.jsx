import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';
import { useCityContext } from '../../helpers/city-context';
const API_KEY = '243fd0876f4114a945f94ebbf4f04b79'


const WeatherOutput = () => {
    const {city, weather} = useCityContext();
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => console.log(response));
    }, [])
                     
    return (
        <div>WeatherOutput</div>

    )
}
export default WeatherOutput