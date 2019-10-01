import React from 'react';
import '../styles/Header.scss'
import { AppContext } from '../context/AppProvider';

const Header = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="header"><div className="header__filter">{`${context.state.city}`}</div></div>
            )}
        </AppContext.Consumer>
    );
}

export default Header;