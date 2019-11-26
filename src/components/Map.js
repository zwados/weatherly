import React from 'react';
import ReactDOM from 'react-dom';
import MapStyle from '../pages/content/MapStyle';
import { AppContext } from '../context/AppProvider';



const mapStyles = {
  map: {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    height: '35em',
    margin: '0 auto'

  }
};
export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  static contextType = AppContext;

  componentDidMount() {

    this.loadMap();

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.initialCenter !== this.props.initialCenter) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      let { selectedMapType } = this.props;
      const { lat, lng } = this.props.initialCenter;
      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom,
          maxZoom: 6,
          minZoom: 4,
          styles: MapStyle
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
      // mapType determines and then adds the type of a layer on the map
      let mapType = new google.maps.ImageMapType({

        getTileUrl: function (coord, zoom) {
          return `https://tile.openweathermap.org/map/${selectedMapType}/${zoom}/${coord.x}/${coord.y}.png?appid=f2d74a34f19c8b461a1356213ca592fc`
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 14,
        minZoom: 0,
        name: 'maptype',
        opacity: .8
      })

      //overlaying map layers
      this.map.overlayMapTypes.insertAt(0, mapType);
      this.addMarker(center, this.map)
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.props.initialCenter;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  addMarker = (location, map) => {
    const { google } = this.props;
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
    const infowindow = new google.maps.InfoWindow({
      content: this.context.state.city.toUpperCase()
    })
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
    return marker
  }

  renderChildren() {
    const { children } = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.props.initialCenter
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <>
        <div style={style} ref="map">

        </div>
        {this.renderChildren()}
      </>

    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  zoom: 3,
  centerAroundCurrentLocation: false,
  visible: true
};

