import icon from '../images/mapIcon.png'
import React from 'react'

const MapMarker = props => {
  return (
    <div>
      <img src={icon} height="40rem" width="30rem" alt="map marker" />
    </div>
  )
}

export default MapMarker
