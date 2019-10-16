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
        console.log(prevProps);
        console.log(this.state);

        if (prevState === this.state) {
            this.fetchData();
        }
    }

    fetchData = async () => {
        let value = this.context;
        let API = `https://api.openweathermap.org/data/2.5/forecast?q=${value.state.city}&appid=f2d74a34f19c8b461a1356213ca592fc`;
        const response = await fetch(API);
        await response.json()
            .then(data => this.setState({ data: data }))
            .catch(() => alert(this.state.error))
    }

    forecastOptions = [24, 48, 72, 96, 120]

    handleClick = (option) => {
        this.setState({ forecastLength: option });
    }

    render() {


        return (
            <div className="forecastPage">
                <h1 className="forecastPage__title">The next {this.state.forecastLength} hours in {this.context.state.city}</h1>
                <div className="forecastPage__buttons">{this.forecastOptions.map(option => <button className="button-primary button-primary--dark" key={option + 'hours'} onClick={() => this.handleClick(option)}>{option} hours</button>)}</div>

                {(this.state.data) ? <div className="forecastPage__content">
                    {this.state.data.list.slice(0, (this.state.forecastLength / 3)).map((day) =>
                        <ForecastTile key={day.dt} data={day} />
                    )}
                </div> : null}
            </div>

        )
    }
}

export default ForecastPage;