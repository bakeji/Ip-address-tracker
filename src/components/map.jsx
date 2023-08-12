import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet' 
import 'leaflet/dist/leaflet.css';


export default function Map(props){
  const customIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
  });                      
  const position =[props.latitude, props.longtitude]
  console.log(position)
    return(
        <div className="map">
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={position} icon={customIcon}>
        <Popup>
          your loccation 
        </Popup>
      </Marker>
    
    </MapContainer>
        </div>
    )
}