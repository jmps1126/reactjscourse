import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons ={
    sunny: "day-sunny",
    fog:    "day-fog"
};

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    debugger;
    console.log(icon);
    if(icon)
        return <weatherIcons name={icon} size="2x"/>;
    else
        return <weatherIcons name="day-sunny" size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;