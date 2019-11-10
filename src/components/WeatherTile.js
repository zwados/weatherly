import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const WeatherTile = (props) => {
    const { main, sys, visibility, wind, weather, clouds } = props.data;
    const minTemp = (main.temp_min - 273.15).toFixed(1);
    const maxTemp = (main.temp_max - 273.15).toFixed(1);
    const temp = (main.temp - 273.15).toFixed(1);
    const unixSunrise = sys.sunrise;
    const unixSunset = sys.sunset;
    const sunriseTime = new Date(unixSunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(unixSunset * 1000).toLocaleTimeString();
    const vision = visibility / 1000
    let windDirection = ''

    const getWindDirection = () => {
        let windDegrees = wind.deg;
        if (windDegrees > 315 || windDegrees < 45) {
            windDirection = 'north'
        } else if (windDegrees > 45 && windDegrees < 135) {
            windDirection = 'east'
        } else if (windDegrees > 135 && windDegrees < 225) {
            windDirection = 'south'
        } else {
            windDirection = 'west'
        }

        return windDirection

    }
    getWindDirection();
    console.log(windDirection);

    return (<div className="tile__content">

        <h3 className='tile__date'>Today</h3>
        <div className="tile_temp">{temp}</div>
        <img className="tile__icon" src={`http://openweathermap.com/img/w/${weather[0].icon}.png`} alt="weather-icon" />
        <h3 className='tile__description'>{weather[0].description}</h3>
        <p>Temperature (min / max): {minTemp} / {maxTemp}</p>
        <p>Cloudiness: {clouds.all} %</p>
        <p>Humidity: {main.humidity} %</p>
        <p>Visibility: {vision} km</p>
        <p>Pressure: {main.pressure}</p>
        <div className="tile__windbox">
            <FontAwesomeIcon className={`tile__wind--${windDirection}`} icon={faArrowUp} />
        </div>
        <p>The wind blows from the {windDirection} with the speed of {wind.speed} m/s</p>
        <p>Sunrise: {`${sunriseTime}`} </p>
        <p>Sunset: {`${sunsetTime}`}  </p>
    </div>);
}

export default WeatherTile;