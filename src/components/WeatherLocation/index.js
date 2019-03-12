import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';




class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props;

        this.state = {
            city,
            data: null
        }
    }

    componentDidMount(){
        this.handleUpdateClick();
    }

    componentDidUpdate(){

    }


    
    handleUpdateClick = () =>{

        const api_weather = getUrlWeatherByCity(this.state.city);
        console.log(api_weather);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newData = transformWeather(data);
            const newCity = data.name;

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
                {data ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}


export default WeatherLocation;