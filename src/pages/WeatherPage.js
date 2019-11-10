import React, { Component } from 'react';
import { AppContext } from '../context/AppProvider';
import '../styles/WeatherPage.scss';
import '../styles/Page.scss';
import '../styles/buttons.scss';
import WeatherTile from '../components/WeatherTile';

class WeatherPage extends Component {

    static contextType = AppContext;


    state = {
        data: null,
        error: 'An error occured',
        forecastLength: 24,
    }

    componentDidMount() {
        this.fetchData();
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
            .then(data => this.setState({ data: data }))
            .catch(() => alert(this.state.error))
    }


    render() {


        return (
            <div className="weatherPage">
                <h1 className="weatherPage__title">The current weather in {this.context.state.city}</h1>

                {(this.state.data) ? <div className="weatherPage__content">

                    <WeatherTile data={this.state.data} />

                </div> : null}
            </div>

        )
    }
}

export default WeatherPage;