import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.17712796,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAj11BxZrYjdpJ6fB8z6fUGyplLZx4ZmPE">
      <GoogleMap
        // @ts-ignore
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
