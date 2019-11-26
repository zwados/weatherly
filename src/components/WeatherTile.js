import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

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

    return (<div className="weatherTiles">
        <div className="weatherTile">
            <div data-aos="zoom-in" data-aos-duration='1000' className="weatherTile__container weatherTile__container--column">
                <div className="weatherTile__current">
                    <h3 className='weatherTile__date'>Today</h3>
                    <div className="weatherTile__weather">
                        <img className="weatherTile__icon--current" src={`http://openweathermap.com/img/w/${weather[0].icon}.png`} alt="weather-icon" />
                        <div className="weatherTile__temp">{temp}</div>
                    </div>
                    <h3 className='weatherTile__description'>{weather[0].description}</h3>
                </div>
            </div>
        </div>
        <div className="weatherTile">
            <div data-aos="zoom-in" data-aos-duration='1000' className="weatherTile__container weatherTile__container--column">
                <div className="weatherTile__conditions">
                    <h2>Conditions:</h2>
                    <p>Temp. (min / max): {minTemp} / {maxTemp}</p>
                    <p>Cloudiness: {clouds.all} %</p>
                    <p>Humidity: {main.humidity} %</p>
                    <p>Visibility: {vision} km</p>
                    <p>Pressure: {main.pressure}</p>
                </div>
            </div>
        </div>
        <div className="weatherTile">
            <div data-aos="zoom-in" data-aos-duration='1000' className="weatherTile__container weatherTile__container--column">
                <div className="weatherTile__wind">
                    <h2>Wind</h2>
                    <div className="weatherTile__windbox">
                        <FontAwesomeIcon className={`tile__wind--${windDirection}`} icon={faArrowUp} />
                    </div>
                    <p>The wind blows from the {windDirection} with the speed of {wind.speed} m/s</p>
                </div>
            </div>
        </div>
        <div className="weatherTile">
            <div data-aos="zoom-in" data-aos-duration='1000' className="weatherTile__container weatherTile__container--column">
                <div className="weatherTile__time weatherTile__time--top"><FontAwesomeIcon className="weatherTile__icon--sun" icon={faSun} />
                    <p className="weatherTile__time--sunrise">Sunrise: {`${sunriseTime}`} </p>
                </div>
                <div className="weatherTile__time weatherTile__time--bottom">
                    <FontAwesomeIcon className="weatherTile__icon--moon" icon={faMoon} />
                    <p className="weatherTile__time--sunset">Sunset: {`${sunsetTime}`}  </p>
                </div>
            </div>
        </div>
    </div>);
}

export default WeatherTile;