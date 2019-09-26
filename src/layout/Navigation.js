import React, { Component } from 'react';
import '../styles/Navigation.scss'
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

class Navigation extends Component {
    state = {}
    render() {
        return (<div className="navigation">
            <Logo />
            <SearchBar />
        </div>);
    }
}

export default Navigation;