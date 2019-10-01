import React from 'react';
import { AppContext } from '../context/AppProvider';
import Logo from '../components/Logo'

const WelcomePage = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="welcomePage">
                    Welcome to <Logo />
                </div>
            )
            }
        </AppContext.Consumer >
    )
}

export default WelcomePage;