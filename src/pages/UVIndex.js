import React from 'react';
import { AppContext } from '../context/AppProvider';

const UVIndex = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="UVIndex">
                    uv index
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default UVIndex;