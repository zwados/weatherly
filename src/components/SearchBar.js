import React, { Component } from 'react';
import '../styles/SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../context/AppProvider';

class SearchBar extends Component {
    state = {
        value: "",
        city: "",
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        });
    }


    render() {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <form onSubmit={(e) => { context.setCity(this.state.value); this.handleSubmit(e) }} className="searchbar">
                        <input type="text" className="searchbar__input" value={this.state.value} onChange={this.handleChange} placeholder="enter the city" />
                        <button type="submit" className="searchbar__submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                )
                }
            </AppContext.Consumer>

        );
    }
}

export default SearchBar;