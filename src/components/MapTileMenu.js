import React, { Component } from 'react';

class MapTileMenu extends Component {
    state = {
        isVisible: false,
        isChecked: false,
    }


    handleChecked = () => {
        let checked = this.state.isChecked;
        this.setState({ isChecked: !checked });
    }

    handleChange = () => {
        let visible = this.state.isVisible;
        this.setState({ isVisible: !visible });
    }
    render() {
        return (
            <>
                <label onClick={this.handleChecked} htmlFor="mapTileMenu"><button className="mapTileButton mapTileButton--menu">Menu</button></label>
                <input onChange={this.handleChange} checked={this.state.isChecked} type='checkbox' id="mapTileMenu" />
            </>
        );
    }
}

export default MapTileMenu;