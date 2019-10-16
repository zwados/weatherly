import React from 'react';

const ForecastTile = (props) => {
    const minTemp = (props.data.main.temp_min - 273.15).toFixed(1);
    const maxTemp = (props.data.main.temp_max - 273.15).toFixed(1);

    return (<div className="tile__content">
        <h3 className='tile__date'>{props.data.dt_txt}</h3>
        <img className="tile__icon" src={`http://openweathermap.com/img/w/${props.data.weather[0].icon}.png`} alt="weather-icon" />
        <h3 className='tile__description'>{props.data.weather[0].description}</h3>
        <p>Temperature (min / max): {minTemp} / {maxTemp}</p>
        <p>Pressure: {props.data.main.pressure}</p>
        <p>Humidity: {props.data.main.humidity} %</p>
    </div>);
}

export default ForecastTile;