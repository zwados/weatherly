import React from 'react';
import '../styles/Header.scss'
import { AppContext } from '../context/AppProvider';

const Header = (props) => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="header">{`${context.state.city}`}</div>
            )}
        </AppContext.Consumer>
    );
}

export default Header;