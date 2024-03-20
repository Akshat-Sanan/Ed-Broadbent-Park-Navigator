'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
import SliderDots from "@/app/ui/SliderDots/SliderDots";

import styles from '../page.module.css';


export default function indigenousGardenPage() {

    const images = [
        {
            src: '/assets/pois/indigenousGarden/indigenousGarden_1.png',
            alt: 'Indigenous Garden',
            body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be a placeholder before the final copy is available.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <PoiSlide imgSrc={images[currentIndex].src} imgAlt={images[currentIndex].alt}>
                <InformationSect header={'INDIGENOUS GARDEN'} body={images[currentIndex].body} audioSrc={images[currentIndex].audioSrc} />
                <SliderDots total={images.length} currentIndex={currentIndex} />
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={images} />
            <PoiFooter hasGallery />
        </>
    );
}