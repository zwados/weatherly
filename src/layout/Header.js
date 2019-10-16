import React, { useContext } from 'react';
import '../styles/Header.scss'
import { AppContext } from '../context/AppProvider';

const Header = () => {

    const context = useContext(AppContext);


    if (context.state.city) {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className="header"><div className="header__filter">{`${context.state.city}`}</div></div>
                )}
            </AppContext.Consumer>
        );
    } else return (
        <div className="header header--default"><div className="header__filter">Welcome to Weatherly - the best weather app ever!</div></div>
    )
}

export default Header;