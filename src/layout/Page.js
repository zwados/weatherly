import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';
import ForecastPage from '../pages/ForecastPage';
import WeatherPage from '../pages/WeatherPage';
import UVIndex from '../pages/UVIndex';
import MapPage from '../pages/MapPage';
import WeatherAlerts from '../pages/WeatherAlerts';
import WelcomePage from '../pages/WelcomePage';
import SearchBar from '../components/SearchBar';
import '../styles/Page.scss';

export default class Page extends Component {

    static contextType = AppContext;

    state = {
        currentPage: document.location.pathname
    }

    routes = [
        {
            path: "/",
            component: WelcomePage,
        },
        {
            path: "/WeatherPage",
            component: WeatherPage,
        },
        {
            path: "/ForecastPage",
            component: ForecastPage,
        },
        {
            path: "/UVIndex",
            component: UVIndex,
        },
        {
            path: "/MapPage",
            component: MapPage,
        },
        {
            path: "/WeatherAlerts",
            component: WeatherAlerts,
        }
    ];

    render() {
        if (this.context.state.city) {
            return (
                <div className="page">
                    {this.context.state.city ? <Switch>
                        {this.routes.map(({ path, component: C }) => (
                            <Route key={C} path={path} exact render={(props) => (
                                <C {...props} />
                            )
                            } />
                        ))}
                    </Switch> : 'select the city'}
                </div>
            )
        } else return (
            <div className="defaultPage">
                <div className="defaultPage__content">
                    <h1 className="defaultPage__title">Where do you want to check the weather?</h1>
                    <SearchBar />
                </div>
            </div>
        )

    }
}

