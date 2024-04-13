import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

const LeafletMap = ({ house }) => {

    const { latitude, longitude } = house;

    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: "350px", width: "60%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

LeafletMap.propTypes = {
    house: PropTypes.object,
}


export default LeafletMap;