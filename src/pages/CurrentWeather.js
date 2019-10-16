import React, { Component } from 'react';
import { AppContext } from '../context/AppProvider';

class CurrentWeather extends Component {

    static contextType = AppContext;


    state = {
        data: null,
        error: 'An error occured',
        API: ''
    }


    componentDidMount() {
        console.log('mounted')

        let value = this.context;
        if (value.state.city) {
            this.fetchData();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(this.state);

        if (prevState === this.state) {
            this.fetchData();
        }
    }


    fetchData = async () => {
        let value = this.context;
        let API = `https://api.openweathermap.org/data/2.5/weather?q=${value.state.city}&appid=f2d74a34f19c8b461a1356213ca592fc`;
        const response = await fetch(API);
        await response.json()
            .then(data => this.setState({ data: data, API: API }))
            .catch(() => alert(this.state.error))
    }

    render() {

        if (this.context.state.city) {
            return (
                <div className="currentWeatherPage">
                    <h1>{(this.state.data ? ('Current weather in ' + this.state.data.name) : "Select the city")}</h1>

                    {console.log(this.state.data)}
                </div>

            )
        } else {
            return (
                <div className="currentWeatherPage">
                    Select the city
                </div>
            )
        }
    }
}

export default CurrentWeather;