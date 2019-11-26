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
        if (prevState === this.state) {
            this.fetchData();
        }
    }

    fetchData = () => {
        let value = this.context;
        let API = `https://api.openweathermap.org/data/2.5/weather?q=${value.state.city}&appid=f2d74a34f19c8b461a1356213ca592fc`;
        fetch(API)
            .then(function (resp) {
                if (!resp.ok) {
                    throw Error(resp.statusText + '-' + resp.url)
                }
                return resp.json()
            })
            .then(data => this.setState({ data: data }))
            .catch((err) => alert('Invalid city name'))
    }


    render() {


        return (
            <div className="weatherPage">
                <h1 data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-sine" className="page__title">The current weather in {this.context.state.city}</h1>

                {(this.state.data) ? <div className="weatherPage__content">

                    <WeatherTile data={this.state.data} />

                </div> : null}
            </div>

        )
    }
}

export default WeatherPage;