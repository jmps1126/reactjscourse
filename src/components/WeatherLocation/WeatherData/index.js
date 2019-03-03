import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    SUN,
} from '../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={"20 mts/s"}/>
    </div>
);

export default WeatherData;