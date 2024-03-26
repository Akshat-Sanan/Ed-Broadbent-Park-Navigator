
'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
import SliderBooking from "@/app/ui/SliderBooking/SliderBooking";
import SliderDots from "@/app/ui/SliderDots/SliderDots";
import poiData from "@/app/lib/poiData.js";

import styles from './info.module.css';



export default function Page() {


    const info = poiData[4].pages.filter(page => page.type === 'information')
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <PoiSlide imgSrc={info[currentIndex].bannerImage} imgAlt={info[currentIndex].alt} dotsLength={info.length} dotsIndex={currentIndex}>
                {currentIndex=== 2 ? <SliderBooking /> : <InformationSect header={'ABOUT'} body={info[currentIndex].body} audioSrc={info[currentIndex].audio} />
                }
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} info={info} />     
            <PoiFooter noAr hasGallery={currentIndex === 2? false: true} galleryLink={"/info/infoGallery"} center={currentIndex === 2? true: false}  />
        </>
    );
}