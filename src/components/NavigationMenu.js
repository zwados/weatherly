import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


class NavigationMenu extends Component {
    state = {
        isOpen: false,
        isChecked: false
    }

    handleChecked = () => {
        let checked = this.state.isChecked;
        this.setState({ isChecked: !checked });
    }

    handleChange = () => {
        let open = this.state.isOpen;
        this.setState({ isOpen: !open });
    }

    render() {
        let icon = this.state.isOpen ? faAngleUp : faAngleDown;
        return (
            <>
                <input onChange={this.handleChange} checked={this.state.isChecked} type="checkbox" id="navigationMenu" />
                <label onClick={this.handleChecked} htmlFor="navigationMenu" className="navigation__iconbox"><button className="navigation__menu"><FontAwesomeIcon icon={icon} /></button></label>


            </>
        )
    }
}

export default NavigationMenu;