import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Star from '@material-ui/icons/Star'

function MapReact () {
  const [center, setCenter] = useState({
    lat: 32.8031,
    lng: 130.707891
  })
  const [zoom, useZoom] = useState(10)

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCyqvzWop_Aso1T1UwWUkTu0u8ImpNbmuU',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Star
          lat={32.806186}
          lng={130.705834}
          color="primary"
        />
        <Star
          lat={32.947987}
          lng={131.115884}
          color="primary"
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapReact