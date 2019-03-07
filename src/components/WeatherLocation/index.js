import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import {
    SUN
} from './../../constants/weathers'

const Location_country = "London,uk";
const api_key = "361c49a12ced117e86fc92b052d60651";
const url_base = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base}?q=${Location_country}&appid=${api_key}`;

const data  = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
};



class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data
        }
    }

    getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    };

    getWeatherState = weather_data => {
        return SUN;
    };

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);
       
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    
    handleUpdateClick = () =>{
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newData = this.getData(data);
            const newCity = data.name;

            console.log(newData);
            this.setState({
                data: newData,
                city: newCity,
            });

        });
    };

    render(){
        const { city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city ={city}/>
                <WeatherData data={data}/>
                <button id="buttonUpdate" onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;