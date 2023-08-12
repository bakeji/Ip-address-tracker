import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet' 
import 'leaflet/dist/leaflet.css';

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}






export default function Map(props){

  
  const customIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
  });                      
  const position =[props.latitude, props.longitude]
  console.log(position)
    return(
        <div className="map">
            <MapContainer  
            key={JSON.stringify(position)}
            center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={position}  icon={customIcon}>
        <Popup>
          {props.city}
        </Popup>
      </Marker>

      <SetViewOnClick
        coords={position}
      />
    
    </MapContainer>
        </div>
    )
}