import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import './map.css'



let iconUbicacion = new leaflet.icon({
    iconUrl:icon,
    iconShadow:iconShadow,
    iconSize:[40,45],
    iconAnchor:[15,60],
    shadowAnchor:[15,60],
    popupAnchor:[-3, -76]
})

const Map = () => {
    return (
        <div className='mapFlex'>
            <header className='ubicacionTit'>
                <h1>
Descubre el lugar ideal para disfrutar de la mejor comida en Medellín.</h1>
            </header>
            <MapContainer center={[6.239644, -75.550570]} zoom={17} scrollWheelZoom={false} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[6.239644, -75.550570]} icon={iconUbicacion} className="icon">
                    <Popup className='pop'>
                    <img src='./imagenes/logoPrin.png' alt='' id="Logo" /><br/>
                        KOSIAKA<br />
                        Comidas rapidas Medellín
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map