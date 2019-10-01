import React from 'react';
import { AppContext } from '../context/AppProvider';

const CurrentWeather = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="currentWeatherPage">
                    current weather
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default CurrentWeather;