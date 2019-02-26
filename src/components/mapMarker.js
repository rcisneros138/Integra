import React, { Component } from 'react'
import icon from '../images/mapIcon.png'

class MapMarker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src={icon} height="40rem" width="30rem" alt="map marker" />
      </div>
    )
  }
}

export default MapMarker
