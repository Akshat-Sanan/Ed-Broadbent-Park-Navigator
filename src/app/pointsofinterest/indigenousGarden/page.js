'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
import poiData from "@/app/lib/poiData.js";

export default function indigenousGardenPage() {

    const info = poiData[1].pages.filter(page => page.type === 'information');


    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <PoiSlide imgSrc={info[currentIndex].bannerImage} imgAlt={info[currentIndex].alt} dotsIndex={currentIndex} dotsLength={info.length}>
                <InformationSect header={poiData[1].title} body={info[currentIndex].body} audioSrc={info[currentIndex].audio} />
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} info={info} />
            <PoiFooter hasGallery galleryLink={'/pointsofinterest/indigenousGarden/indigenousGardenGallery'} />
        </>
    );
}