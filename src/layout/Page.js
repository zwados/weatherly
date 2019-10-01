import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';
import FiveDaysForecast from '../pages/FiveDaysForecast';
import CurrentWeather from '../pages/CurrentWeather';
import UVIndex from '../pages/UVIndex';
import WeatherMap from '../pages/WeatherMap';
import WeatherAlerts from '../pages/WeatherAlerts';
import WelcomePage from '../pages/WelcomePage';

const Page = () => {


    return (
        <AppContext.Consumer>
            {(context) => (
        <div className="page">
            
            <Switch>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/CurrentWeather" component={CurrentWeather} />
                <Route path="/FiveDaysForecast" component={FiveDaysForecast} />
                <Route path="/UVIndex" component={UVIndex} />
                <Route path="/WeatherMap" component={WeatherMap} />
                <Route path="/WeatherAlerts" component={WeatherAlerts} />
            </Switch>

        </div>
        )}
        </AppContext.Consumer>
    );
}

export default Page;
