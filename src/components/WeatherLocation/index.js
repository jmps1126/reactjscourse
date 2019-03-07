import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {
    api_weather
} from './../../constants/api_url';




class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null
        }
    }

    componentDidMount(){
        this.handleUpdateClick();
    }

    componentDidUpdate(){

    }


    
    handleUpdateClick = () =>{
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newData = transformWeather(data);
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
                {data ? <WeatherData data={data}/> : <CircularProgress size={50}/> }
            </div>
        );
    }
}

export default WeatherLocation;