'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
import poiData from "@/app/lib/poiData.js";
import styles from '../page.module.css';


export default function AmphitheaterPage() {

    const info = poiData[0].pages.filter(page => page.type === 'information');


    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <PoiSlide className={styles.slide} imgSrc={info[currentIndex].bannerImage} imgAlt={info[currentIndex].alt} dotsIndex={currentIndex} dotsLength={info.length}>
                <InformationSect header={poiData[0].title} body={info[currentIndex].body} audioSrc={info[currentIndex].audio} />
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} info={info} />
            <PoiFooter hasGallery galleryLink={'/pointsofinterest/amphitheather/amphitheatherGallery'} />
        </>
    );
}