'use client'
import React, { useState } from 'react';
import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/app/ui/SliderButtons/SliderButtons";
import SliderDots from "@/app/ui/SliderDots/SliderDots";
import styles from '../page.module.css';



export default function edBroadBentPage() {

    const images = [
        {
            src: '/assets/pois/edBroadBent/edBroadbent_1.png',
            alt: 'ED BROADBENT',
            body: "This park is a tribute to the remarkable public servant, Ed Broadbent, who dedicated himself tirelessly to serving Canadians and, particularly, the people of Oshawa.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/edBroadBent/edBroadbent_2.png',
            alt: 'ED BROADBENT',
            body: "A passionate advocate for human rights, Mr. Broadbent tirelessly worked towards advancing Indigenous rights, promoting women's equality, addressing child poverty, advocating for ethics in government, and striving for tax equality.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/edBroadBent/edBroadbent_3.png',
            alt: 'ED BROADBENT',
            body: "Mr. Broadbent, hailing from Oshawa, had the honour of representing the NDP in his hometown from 1968 to 1989. Additionally, he held the position of leader of the New Democratic Party from 1975 to 1989.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/edBroadBent/edBroadbent_4.png',
            alt: 'ED BROADBENT',
            body: "His impact reached far and wide, serving as a Vice-President of the Socialist International and as the founding President of the International Centre for Human Rights and Democratic Development in Montreal.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
        {
            src: '/assets/pois/edBroadBent/edBroadbent_5.png',
            alt: 'ED BROADBENT',
            body: "We pay tribute to the late Mr. Ed Broadbent, whose peaceful departure on January 11, 2024, has left a lasting impact on the community of Oshawa.",
            audioSrc: '/assets/music/amphitheater_1.mp3'
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <PoiSlide imgSrc={images[currentIndex].src} imgAlt={images[currentIndex].alt}>
                <InformationSect header={'ED BROADBENT'} body={images[currentIndex].body} audioSrc={images[currentIndex].audioSrc} />
                <SliderDots total={images.length} currentIndex={currentIndex} />
            </PoiSlide>
            <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={images} />
            <PoiFooter hasGallery={true} galleryLink={"./gallery"}/>
        </>
    );
}