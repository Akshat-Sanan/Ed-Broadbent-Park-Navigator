'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
import styles from '../page.module.css';



export default function HumanRightsPage() {

    const images = [
        {
            src: '/assets/pois/gardenOfHumanRights/human_rights_1.png',
            alt: 'GARDEN OF HUMAN RIGHTS',
            body: "As you explore this park, you'll come across the Garden of Human Rights, a fitting tribute to the values cherished by Mr. Broadbent. Thirteen garden beds stand tall, symbolizing the forbidden territories of prejudice within the Canadian Human Rights Act",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/gardenOfHumanRights/human_rights_2.png',
            alt: 'GARDEN OF HUMAN RIGHTS 2',
            body: "Every bed represents a dedication to equality, embracing diversity in race, colour, gender, and sexual orientation. The garden's location is proudly marked by the United Nations Human Rights flag, and the space will be adorned with community flags during important months.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/gardenOfHumanRights/human_rights_3.png',
            alt: 'GARDEN OF HUMAN RIGHTS 2',
            body: "Featuring a variety of seating options, this space offers a one-of-a-kind environment for deep thought and introspection. Discover more about The Canadian Human Rights Act to enhance your knowledge.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <PoiSlide imgSrc={images[currentIndex].src} imgAlt={images[currentIndex].alt}>
                <InformationSect header={'GARDEN OF HUMAN RIGHTS'} body={images[currentIndex].body} audioSrc={images[currentIndex].audioSrc} />
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={images} />
            <PoiFooter hasGallery />
        </>
    );
}