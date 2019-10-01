import React from 'react';
import { AppContext } from '../context/AppProvider';

const WeatherMap = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="WeatherMap">
                    weather map
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default WeatherMap;