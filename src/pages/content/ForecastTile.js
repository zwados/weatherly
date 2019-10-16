import React from 'react';


const ForecastTile = (props) => {
    return (
        <div>
            Tile content for {props.city.name}
        </div>
    );
}

export default ForecastTile;