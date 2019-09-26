import React, { Component } from 'react';
import '../styles/SearchBar.scss'

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
            city: this.state.value,
            value: "",
        });
    }

    render() {
        return (<form onSubmit={this.handleSubmit} className="searchbar">
            <input type="text" className="searchbar__input" value={this.state.value} onChange={this.handleChange} />
            <button type="submit" className="searchbar__submit">S</button>
        </form>);
    }
}

export default SearchBar;