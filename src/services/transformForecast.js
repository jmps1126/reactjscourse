import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    
    data.list.filter(item =>(
        moment.utc(item.dt_txt).hour() === 12||
        moment.utc(item.dt_txt).hour() === 6 ||
        moment.utc(item.dt_txt).hour() === 18 
    )).map(item =>({
        weekDay: moment.utc(item.dt_txt).format('ddd'),
        hour: moment.utc(item.dt_txt).hour(),
        data: transformWeather(item)
    }))
);

export default transformForecast;