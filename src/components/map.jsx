import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function Map(props){
  const customIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
  });                      
  const position =[props.latitude, props.longtitude]
  console.log(position)
  console.log(props.latitude)
    return(
        <div className="map">
            <MapContainer center={[6.45407, 3.39467]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={[6.45407, 3.39467]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    
    </MapContainer>
        </div>
    )
}