import React, { Component } from 'react';



export const AppContext = React.createContext();

export class AppProvider extends Component {
    state = {
        city: '',
    }

    setCity = (currentCity) => {
        if (this.state.city !== currentCity) {
            this.setState({ city: currentCity }
            )
        }
    }



    render() {

        return (
            <AppContext.Provider value={
                {
                    state: this.state,
                    setCity: this.setCity,
                }
            } >
                {this.props.children}
            </ AppContext.Provider>
        );
    }
}

