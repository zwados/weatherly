import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <ul className="sideNav__list">
            <li><NavLink to="/CurrentWeather">Current Weather</NavLink ></li>
            <li><NavLink to="/FiveDaysForecast">5-days Forecast</NavLink></li>
            <li><NavLink to="/UVIndex">UV Index</NavLink></li>
            <li><NavLink to="/WeatherAlerts">Weather Alerts</NavLink></li>
            <li><NavLink to="/WeatherMap">Weather Map</NavLink></li>
        </ul>
    );
}

export default NavigationLinks;