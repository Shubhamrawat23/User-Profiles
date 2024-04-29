import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function MapDetails() {
  return (
      <div style={{}}>
          <ReactMapGL
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              latitude={45.4211}
              longitude={-75.6983}
              mapStyle="mapbox://styles/shubh130099/clvlcypeb01fx01qp3yzlb7qg"
              zoom={10}
              width="100vw"
              height="100vh"
          >
              <Marker latitude={45.4211}
                  longitude={-75.6983}>
                    <button>PT.</button>
              </Marker>
          </ReactMapGL>
      </div>
  )
}