'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
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

    return (
        <>
            <PoiSlide imgSrc={images[currentIndex].src} imgAlt={images[currentIndex].alt}>
                <InformationSect header={'AMPHITHEATER'} body={images[currentIndex].body} audioSrc={images[currentIndex].audioSrc} />
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={images} />
            <PoiFooter hasGallery />
        </>
    );
}