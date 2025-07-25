import  WeatherTable  from '../components/WeatherTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:5238/weatherforecast');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="mt-10">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Weather Page</h1>
        <p className="text-center">Here you can find the latest weather updates.</p>
        <WeatherTable weatherData={weatherData} />
    </div>
  )
}

export default Weather
