import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <ul className="navi__list">
            <li><NavLink to="/WeatherPage">Current Weather</NavLink ></li>
            <li><NavLink to="/ForecastPage">5-days Forecast</NavLink></li>
            <li><NavLink to="/MapPage">Weather Map</NavLink></li>
        </ul>
    );
}

export default NavigationLinks;