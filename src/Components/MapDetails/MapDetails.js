import React, { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationMarker from '../location-pin.png'
import './MapDetails.css'

export default function MapDetails({data,setMapShow}) {
    const lat = data?.address.coordinates.lat;
    const lng = data?.address.coordinates.lng;

    
    const [viewPort, setViewPort] = useState({
        latitude: lat,
        longitude: lng,
        zoom: 10,
    });

    const handleViewportChange = (newViewport) => {
        setViewPort(newViewport.viewState);
    };
    return (
        <div style={{ width: '90vw', height: "90vh" }} id='mapBox'>

            <button onClick={() => {
                setMapShow(null)
            }}
                id='mapCloseBtn'>
                X</button>

            <ReactMapGL
                {...viewPort}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/shubh130099/clvlcypeb01fx01qp3yzlb7qg"
                onMove={handleViewportChange}
            >
                <Marker latitude={lat} longitude={lng}>
                    <button style={{backgroundColor:"transparent",width:"30px",height:"30px",padding:'0px',margin:"0px",border:"0px"}}>
                        <img src={LocationMarker} alt='marker' width={30} height={30} />
                    </button>
                </Marker>

                <NavigationControl position='bottom-right'/>

                <Popup
                latitude={lat}
                longitude={lng}
                anchor='bottom-right'
                >
                    <div style={{textAlign:"left"}}>
                        <div><strong>{data.firstName} {data.lastName}</strong></div>
                        <div>{data.phone}</div>
                        <div>{data.address.address},{data.address.city}</div>
                    </div>
                </Popup>
            </ReactMapGL>
        </div>
    );
}
