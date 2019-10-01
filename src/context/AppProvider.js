import React, { Component } from 'react';


export const AppContext = React.createContext();

export class AppProvider extends Component {
    state = {
        city: 'Warsaw',
        data: null,
        isLoading: false,
        error: null
    }

    API = '';

    changeApiCall = (city) => {
        this.API = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=4f84972d0cc4eaab674053bad226966c`;
        if (city) { this.API = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=4f84972d0cc4eaab674053bad226966c` }
    }

    fetchData = async () => {
        await fetch(this.API)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(error => this.setState({ error }));
    }

    setCity = (currentCity) => {
        this.changeApiCall(currentCity);
        this.setState({ city: currentCity }
        )
    };

    render() {
        return (
            <AppContext.Provider value={
                {
                    state: this.state,
                    setCity: this.setCity,
                    fetchData: this.fetchData,
                }
            } >
                {this.props.children}
            </ AppContext.Provider>
        );
    }
}

