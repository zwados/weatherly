import React from 'react';
import { AppContext } from '../context/AppProvider';
import Logo from '../components/Logo'

const WelcomePage = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="welcomePage">
                    <h1>Welcome to <Logo /></h1>
                    <h2>Choose on of categories listed above to see the results</h2>
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default WelcomePage;