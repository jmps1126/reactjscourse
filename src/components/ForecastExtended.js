import React, { Component } from 'react' ;
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import { url_forecast, api_key } from './../constants/api_url';
import transformForecast from './../services/transformForecast';

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }; 
    }

    //Se ejecuta una vez en el ciclo de vida de react
    componentDidMount(){
        this.updateCity(this.props.city);
    }

    // se ejecuta cada vez que se actualizan las propiedades, exepto la primera vez que se carga el componente
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData : null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city =>{
        const url_forecast_complete = `${url_forecast}?q=${city}&appid=${api_key}`;
        fetch(url_forecast_complete).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (<ForecastItem key={`${forecast.day}${forecast.hour}`}
                                                           weekDay={forecast.day}
                                                           hour={forecast.hour} 
                                                           data={forecast.data}></ForecastItem>));
    }

    renderProgress = () =>{
        return <h3>Cargando pronóstico extendido....</h3>
    }

    render() {
        
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
                <div>
                    <h2 className='forecast-title'>Pronóstico extendido {city}</h2>
                    {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
                </div>
               );
    }

}


ForecastExtended.propType = {
    city : PropTypes.string.isRequired,
}
export default ForecastExtended;