import React, { useState } from 'react'
import GoogleMap from 'google-map-react';
import * as PropTypes from 'prop-types'
import MapMarker from './map_marker'

const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;
const K_HOVER_DISTANCE = 30;

function MainMapBlock ({pointList, zoom = 10}) {
  const [center, setCenter] = useState({
    lat: 32.834825,
    lng: 130.90301
  })

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyCyqvzWop_Aso1T1UwWUkTu0u8ImpNbmuU'
        }}
        center={center}
        zoom={zoom}
  /*      onBoundsChange={}
        onChildClick={}
        onChildMouseEnter={}
        onChildMouseLeave={}*/
        margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
        hoverDistance={K_HOVER_DISTANCE}
        /*distanceToMouse={}*/
      >
        {pointList.map((cat) =>
          cat.points.map((point) =>
            <MapMarker
              lat={point.lat}
              lng={point.lng}
              color={cat.color}
              text={point.name}
            />
          )
        )}

    </GoogleMap>
    </div>
  );
}

MainMapBlock.propTypes = {
  zoom: PropTypes.number.isRequired
}

export default MainMapBlock