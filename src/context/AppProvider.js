import React, { Component } from 'react';


export const AppContext = React.createContext();

export class AppProvider extends Component {
    state = {
        city: 'london',
    }

    render() {
        return (
            <AppContext.Provider value={
                {
                    state: this.state,
                    setCity: (value) => this.setState({ city: value })
                }} >
                {this.props.children}
            </ AppContext.Provider>
        );
    }
}

