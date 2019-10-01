import React from 'react';
import { AppContext } from '../context/AppProvider';

const FiveDaysForecast = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="fiveDaysForecastPage">
                    5-days forecast
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default FiveDaysForecast;