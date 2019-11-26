import React from 'react';

const ForecastTile = (props) => {

    const { main, dt_txt, weather, } = props.data;
    const minTemp = (main.temp_min - 273.15).toFixed(1);
    const maxTemp = (main.temp_max - 273.15).toFixed(1);

    return (<div data-aos="zoom-in" data-aos-duration='1000' className="tile__content">

        <h3 className='tile__date'>{dt_txt}</h3>
        <img className="tile__icon" src={`http://openweathermap.com/img/w/${weather[0].icon}.png`} alt="weather-icon" />
        <h3 className='tile__description'>{weather[0].description}</h3>
        <p>Temperature (min / max): {minTemp} / {maxTemp}</p>
        <p>Pressure: {main.pressure}</p>
        <p>Humidity: {main.humidity} %</p>

    </div>);
}

export default ForecastTile;