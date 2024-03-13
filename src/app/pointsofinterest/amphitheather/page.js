'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import styles from '../page.module.css';


export default function AmphitheaterPage() {

    const images = [
        {
            src: '/assets/pois/amphitheather/amphitheather_1.png',
            alt: 'Amphitheather',
            body: 'Welcome to Ed Broadbent Waterfront Park\'s Amphitheater, a haven of nature and culture. Find your seat and immerse yourself in the magic of live performances and shared moments',
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/amphitheather/amphitheather_2.png',
            alt: 'Amphitheather 2',
            body: "Experience the beauty of our accessible amphitheater, designed for everyone. It's a space where diverse performances and connections flourish, embracing the essence of community.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const prevImage = () => {
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <>
            <PoiSlide imgSrc={images[currentIndex].src} imgAlt={images[currentIndex].alt}>
                <InformationSect header={'AMPHITHEATER'} body={images[currentIndex].body} audioSrc={images[currentIndex].audioSrc} />
            </PoiSlide>
            {currentIndex < images.length - 1 && <button className={styles.next_button} onClick={nextImage}>
                <img src={'/assets/slider_arrow.png'} /> </button>}
            {currentIndex > 0 && <button className={styles.prev_button} onClick={prevImage}>
                <img src={'/assets/slider_arrow.png'} /></button>}
            <PoiFooter hasGallery />
        </>
    );
}