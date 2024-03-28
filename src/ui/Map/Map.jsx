"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import styles from "./map.module.css";
import { useRouter } from "next/navigation";

//https://bettertyped.github.io/react-zoom-pan-pinch/?path=/story/docs-introduction


const Map = () => {
	if(typeof window !== "undefined"){
		//using ref to prevent map initialising multiple times
	const mapRef = useRef(null);
	let mapp = null;
	let navigatorIcon = L.icon({
		iconUrl: '/assets/marker.png',
		iconSize:     [65, 70],
		iconAnchor:   [32, 70],
		popupAnchor:  [2,-40]
	});

	const router = useRouter();

	useEffect(() => {
		// setting the map view and only once
		if (!mapRef.current) {
				mapp = L.map('map', {
				dragging: false,
				zoomControl: false,
				maxZoom: 19,
				attributionControl: false,
				minZoom: 18
			}).setView([43.86845942580169, -78.8325812866236], 16);
			mapRef.current = mapp;
        }

		//currently set in a way that when the user scans a qr code, the user gets set on that qr code location, in the meantime, real time tracking kicks in
		const defaultCoords = getDeafultCoordinates("qrCode1");
		//display points of interests
		displayPointOfInterests(mapp);

		//initializing and setting up the marker
		let marker = L.marker([defaultCoords.deafultLat, defaultCoords.deafultLong], {icon: navigatorIcon}).addTo(mapp);
		marker.bindPopup("You are here!").openPopup();

		//* This part still needs to be build on how to tell the user when they are out of the navigator boundaries
		// if (defaultCoords.deafultLat >= 43.87087055256609 && defaultCoords.deafultLat <= 43.86630840149141 || defaultCoords.deafultLong >= -78.83484902811735 && defaultCoords.deafultLong <= -78.83054050924405) {
		// 	console.log("in area")
		// 	// Code here to inform the user they are in the area
		// } else {
		// 	console.log("out of the area")
		// 	// Code here to inform the user they are out of the area
		// }

		//overlaying the map image
		const imageUrl = '/assets/map.png';
		const imageBounds = [[43.870622496768334, -78.83587688569492], [43.86644892951219, -78.82983352210522]];
		L.imageOverlay(imageUrl, imageBounds).addTo(mapp);

		//*Commented as this code will try to fetch and display the current location and page will be shown blank as current user location is tracked
		// mapp.locate({ setView: true, maxZoom: 15, watch: true, timeout: 20000, enableHighAccuracy: true, maximumAge: 30000 });

		// mapp.on('locationfound', (e) => {
		// 	if (marker) {
		// 		mapp.removeLayer(marker);
		// 	}
		// 	marker = L.marker(e.latlng).addTo(mapp);
		// });

		// mapp.on('locationerror', (e) => {
		// 	console.log(e.message)
		// });

		}, []);

		const getDeafultCoordinates = (QR) => {
			let deafultLat;
			let deafultLong;

			switch (QR) {
				case "qrCode1":
				deafultLat = 43.86879686674433;
				deafultLong = -78.8326127728734;
				break;
				case "qrCode2":
				deafultLat = 43.868574420057485;
				deafultLong = -78.8331032965125;
				break;
				case "qrCode3":
				deafultLat = 43.8677074404313;
				deafultLong = -78.83218554260746;
				break;
			}

			return { deafultLat: deafultLat, deafultLong: deafultLong };
		};

		const displayPointOfInterests = (map) => {
			createCustomMarker(map, 43.86879686674433, -78.8326127728734, "gardenOfHumanRights", "/pointsofinterest/gardenOfHumanRights");
			createCustomMarker(map, 43.868574420057485, -78.8331032965125, "amphitheather", "/pointsofinterest/amphitheather");
			createCustomMarker(map, 43.8677074404313, -78.83218554260746, "edBroadBent", "/pointsofinterest/edBroadBent");
		};

		const createCustomMarker = (map, lat, lng, popupContent, link) => {
			const marker = L.circle([lat, lng], {
				color: 'green',
				fillColor: 'green',
				fillOpacity: 0.5,
				radius: 5
			}).addTo(map);
			marker.bindPopup(popupContent);
			marker.on('click', () => {
				// window.location.href = link;
				router.push(link);
			});
		};

	return (
		<section className='mapWrapper'>
			<div id="map" className={styles.map}></div>
		</section>
	);
	}else{
		return <></>
	}
};

export default Map;