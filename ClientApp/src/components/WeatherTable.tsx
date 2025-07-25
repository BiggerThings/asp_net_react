import React from 'react'

type weatherRecord = {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}

const WeatherTable = ({ weatherData }: { weatherData: weatherRecord[] }) => {
  return (
    <table className="border-separate border border-green-800 ...">
  <thead>
    <tr>
      <th className="border border-green-600 ...">Date</th>
      <th className="border border-green-600 ...">Temp (°C)</th>
      <th className="border border-green-600 ...">Summary</th>
      <th className="border border-green-600 ...">Temp (°F)</th>
    </tr>
  </thead>
  <tbody>
    {weatherData.map((data, index) => (
      <tr key={index}>
        <td className="border border-green-600 ...">{data.date}</td>
        <td className="border border-green-600 ...">{data.temperatureC}</td>
        <td className="border border-green-600 ...">{data.summary}</td>
        <td className="border border-green-600 ...">{data.temperatureF}</td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

export default WeatherTable
