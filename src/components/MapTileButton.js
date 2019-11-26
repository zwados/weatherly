import React from 'react';

const MapTileButton = (props) => {
    return (<button id={props.itemId} onClick={(e) => props.handleClick(e)} className="mapTileButton">
        {props.buttonText.slice(0, -4)}
    </button>);
}

export default MapTileButton;