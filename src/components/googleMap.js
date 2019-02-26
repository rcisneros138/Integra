import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import MapMarker from './mapMarker'

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 43.1744967, lng: -87.9140219 },
    zoom: 15,
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{ key: `${process.env.MAP_KEY}` }}
      >
        <MapMarker
          lat={43.1744967}
          lng={-87.9140219}
          style={{ position: 'absolute', transform: 'translate(-60%, -100%)' }}
        />
      </GoogleMapReact>
    )
  }
}

export default GoogleMap
