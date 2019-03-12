import { url_base, api_key} from './../constants/api_url';

const getUrlWeatherByCity = city =>{
    return `${url_base}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;