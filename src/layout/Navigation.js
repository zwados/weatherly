import React from 'react';
import '../styles/Navigation.scss'
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import NavigationLinks from '../components/NavigationLinks';
import NavigationMenu from '../components/NavigationMenu';

class Navigation extends React.Component {

    state = {
        scrolling: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY > 400 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
    }

    render() {
        return (<div className="navigation" style={{ color: '#06DCD6', position: this.state.scrolling ? 'fixed' : 'relative', top: 0, right: 0, width: '100%', zIndex: 1, paddingTop: '10px' }}>
            <Logo isHidden={this.state.scrolling} />
            <NavigationMenu />
            <NavigationLinks />
            <SearchBar />
        </div>);
    }
}

export default Navigation;