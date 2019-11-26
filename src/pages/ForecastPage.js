import React, { Component } from 'react';
import { AppContext } from '../context/AppProvider';
import '../styles/ForecastPage.scss';
import '../styles/buttons.scss';
import ForecastTile from '../components/ForecastTile';

class ForecastPage extends Component {


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
        let API = `https://api.openweathermap.org/data/2.5/forecast?q=${value.state.city}&appid=f2d74a34f19c8b461a1356213ca592fc`;
        fetch(API)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then(data => this.setState({ data: data }))
            .catch((err) => alert('Invalid city name'))
    }

    forecastOptions = [24, 48, 72, 96, 120]

    handleClick = (option) => {
        this.setState({ forecastLength: option });
    }

    render() {
        let forecastStart = ((this.state.forecastLength / 3) - ((this.state.forecastLength / 3) / (this.state.forecastLength / 24)));
        let forecastEnd = (this.state.forecastLength / 3);


        return (
            <div className="forecastPage">
                <h1 data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-sine" className="page__title">The next {this.state.forecastLength} hours in {this.context.state.city}</h1>
                <div data-aos="zoom-in" data-aos-delay="500" className="forecastPage__buttons">{this.forecastOptions.map(option => <button className="button-primary button-primary--dark" key={option + 'hours'} onClick={() => this.handleClick(option)}>{option} hours</button>)}</div>

                {(this.state.data) ? <div className="forecastPage__content">
                    {this.state.data.list.slice(forecastStart, forecastEnd).map((day) =>
                        <ForecastTile key={day.dt} data={day} />
                    )}
                </div> : null}
            </div>

        )
    }
}

export default ForecastPage;