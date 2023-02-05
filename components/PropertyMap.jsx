import GoogleMapReact from "google-map-react";

const Marker = () => (
  <div className="w-14 h-14 rounded-full bg-opacity-50 bg-theme border-[3px] border-theme" />
);

const PropertyMap = ({ geography: { lat, lng } }) => {
  return (
    <div className="w-full md:w-4/5 h-96 rounded-2xl overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={{
          lat: lat,
          lng: lng,
        }}
        defaultZoom={12}
        className="w-full h-full rounded-2xl"
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default PropertyMap;
