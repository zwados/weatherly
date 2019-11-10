import React, { Component } from 'react';
import '../styles/Header.scss'
import { AppContext } from '../context/AppProvider';

class Header extends Component {

    state = {
        data: 'Warsaw',
        backgroundImage: '',
    }

    static contextType = AppContext;

    fetchData = async () => {
        let city = this.context.state.city;
        let API = `https://pixabay.com/api/?key=14224965-dab17cccdd274b0be1640d311&q=${encodeURIComponent(city)}&image_type=photo&pretty=true`;
        const response = await fetch(API);
        await response.json()
            .then(data => this.setState({
                data: data,
                backgroundImage: data.hits[0].largeImageURL,
            }))

            .catch(() => console.log(this.state.error))
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.data === prevState.data) {
            this.fetchData();

        }
    }


    setBackgroundImage = () => {
        this.setState({ backgroundImage: this.state.data.hits[0].largeImageURL });
    }



    render() {
        if (this.context.state.city) {
            return (

                <div className="header" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}><div className="header__filter">{`${this.context.state.city}`}</div></div>
            );
        } else return (
            <div className="header header--default"><div className="header__filter">Welcome to Weatherly - the best weather app ever!</div></div>
        )
    }
}

export default Header;