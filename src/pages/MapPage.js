import React, { Component } from 'react';
import { AppContext } from '../context/AppProvider';
import WeatherMap from '../components/WeatherMap'
import '../styles/WeatherMap.scss';


class MapPage extends Component {

    static contextType = AppContext;

    state = {
        data: null,
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data === this.state.data) {
            this.fetchData();
            console.log('condition works')

        }
    }

    fetchData = async () => {
        let value = this.context;
        let API = `https://api.openweathermap.org/data/2.5/weather?q=${value.state.city}&appid=f2d74a34f19c8b461a1356213ca592fc`;

        fetch(API)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then(data => this.setState({ data: data }))
            .catch(() => alert('Invalid city name'))
    }

    render() {
        return (
            <div className="mapPage">
                <h1 data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-sine" className="page__title">Weather map for {this.context.state.city}</h1>
                <h3>See the map of clouds, rainy areas and more!</h3>
                {this.state.data ? <WeatherMap data={this.state.data} /> : null}
            </div>);
    }
}

export default MapPage;