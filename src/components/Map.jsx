import {
  GoogleMap as GoogleMaps,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const Map = () => {
  const center = {
    lat: 23.8103,
    lng: 90.4125,
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Find Us
      </h2>
      <LoadScript googleMapsApiKey="AIzaSyDRUsPNind2nY9AtPaQ8d0cGEXXh-B5etc">
        <GoogleMaps
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        >
          {/* Marker Example */}
          <Marker position={center} label="Dhaka" />
        </GoogleMaps>
      </LoadScript>
    </div>
  );
};

export default Map;
