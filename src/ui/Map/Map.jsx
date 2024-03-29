"use client";

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import { useRouter } from 'next/navigation'

const Map = () => {
	const position = [43.86845942580989, -78.8325812866231];
	const mapRef = useRef(null);
	const router = useRouter()

	const navigatorIcon = L.icon({
		iconUrl: '/assets/marker.png',
		iconSize: [65, 70],
		iconAnchor: [32, 74],
		popupAnchor: [2, -40]
	});

	const handleMarkerClick = (link) => {
		router.push(link)

	};

	return (
		<section className='mapWrapper'>
			<MapContainer
				ref={mapRef}
				center={position}
				attributionControl= {false}
				zoom={18}
				scrollWheelZoom={false}
				style={{ height: '100%', width: '100%' }}
			>

			<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker position={position} icon={navigatorIcon}>
			</Marker>

			<CircleMarker center={[43.86879686674433, -78.8326127728734]} radius={10} eventHandlers={{click:() => handleMarkerClick('/pointsofinterest/gardenOfHumanRights')}}>
			</CircleMarker>

			<CircleMarker center={[43.868574420057485, -78.8331032965125]} radius={10} eventHandlers={{click:() => handleMarkerClick('/pointsofinterest/amphitheather')}}>
			</CircleMarker>

			<CircleMarker center={[43.8677074404313, -78.83218554260746]} radius={10} eventHandlers={{click:() => handleMarkerClick('/pointsofinterest/edBroadBent')}}>
			</CircleMarker>
		</MapContainer>
		</section>
	);
};

export default Map;