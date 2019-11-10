import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { CurrentLocation } from '../components/Map';
import MapTileButton from './MapTileButton';
import '../styles/WeatherMap.scss';





class WeatherMap extends Component {

    state = {
        currentCords: {
            lat: this.props.data.coord.lat,
            lng: this.props.data.coord.lon
        },
        mapType: 'clouds_new'
    }

    //map types available in OWM free user plan
    mapTypes = [
        'clouds_new', 'precipitation_new', 'pressure_new', 'wind_new', 'temp_new'
    ]

    data = this.props.data;

    handleMapTypeChange = (e) => {
        this.setState({ mapType: e.target.id });
    }

    render() {
        return (
            this.data ? <div className="WeatherMap">
                <div className="mapTileButtons">
                    {this.mapTypes.map((mapType) => (
                        <MapTileButton handleClick={this.handleMapTypeChange} buttonText={mapType} itemId={mapType} key={mapType} />
                    ))}
                </div>
                <CurrentLocation centerAroundCurrentLocation
                    data={this.data}
                    google={this.props.google}
                    zoom={5}

                    initialCenter={{
                        lat: this.props.data.coord.lat,
                        lng: this.props.data.coord.lon
                    }}
                    selectedMapType={this.state.mapType}
                >

                </CurrentLocation>

            </div>
                : null
        );
    }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyC-XxeMWv2Jalaw7y0MGK52T8S7mJtf3bg' })(WeatherMap);
