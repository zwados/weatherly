import React, { Component } from 'react';
import { AppContext } from '../context/AppProvider';
import WeatherMap from '../components/WeatherMap'


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
        console.log(API)
        const response = await fetch(API);
        await response.json()
            .then(data => this.setState({ data: data }))
            .catch(() => alert(this.state.error))
    }

    render() {
        return (
            <div className="mapPage">
                {this.state.data ? <WeatherMap data={this.state.data} /> : null}
            </div>);
    }
}

export default MapPage;