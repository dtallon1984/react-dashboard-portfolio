import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
//import { ManOutlined } from "@mui/icons-material";

const Map = ({ assetData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const actualCenter = center;
  const actualZoom = zoom;
  const markers = assetData.map((as, index) => {
    return (
      <LocationMarker
        key={index}
        lat={as.MapCoordinates.Latitude}
        lng={as.MapCoordinates.Longitude}
        onClick={() => setLocationInfo({ id: as.id, title: as.Address })}
      />
    );
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD43WEmuWhYvjjR3H6K-qwuIGoVBLVYo7c" }}
        defaultCenter={center}
        defaultZoom={zoom}
        center={actualCenter}
        zoom={actualZoom}
        options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 39.5,
    lng: -98.5,
  },
  zoom: 6,
};

export default Map;
