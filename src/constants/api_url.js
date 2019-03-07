const Location_country = "Taipei,TW";
const api_key = "361c49a12ced117e86fc92b052d60651";
const url_base = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base}?q=${Location_country}&appid=${api_key}`;