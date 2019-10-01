import React from 'react';
import { AppContext } from '../context/AppProvider';

const WeatherAlerts = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="WeatherAlerts">
                    weather alerts
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default WeatherAlerts;