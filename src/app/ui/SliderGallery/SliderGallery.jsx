// Slider Gallery Component
// This component is a slider gallery idea, it displays a list of images and allows the user to navigate trough more images trough a slider.
// If the user click on an image it is shown "highlithed" in the top 

// David Avendano ,Google & Copilot :)

// Allows the use of useState
"use client";
import React from 'react';
import { useState } from 'react';
import styles from './SliderGallery.module.css';
import PoiHeader from '../PoiHeader/PoiHeader';



export default function SliderGallery(header) {
    const images = [

        "../assets/bookImage.png",
        "../humanrights.png",
        "../indigenous.png",
        "../assets/image1.png",
        "../assets/image2.png",
        "../assets/image3.png"
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const imagesPerScreen = 6;

    const handleClickImage = (image) => {
        setSelectedImage(image);
        setIsFullScreen(true);
    };

    const handleBackClick = () => {
        setIsFullScreen(false);
    };

    function content(header="title") {
        if (isFullScreen) {
            return (
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={selectedImage} alt="description" />
                </div>
            );
        } else {
            return (
                <>
                    <div className={styles.galleryTitle}>{`${header} gallery`}</div> 
                    <br />
                    <div className={styles.imagesContainer}>
                        {images.slice(0, imagesPerScreen).map((image, index) => (
                            <img className={styles.thumbnail}
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleClickImage(image)}
                            />
                        ))}
                    </div>
                </>
            );
        }
    }


    return (
        <div className={styles.container}>
            <PoiHeader
                title="Point of  Gallery"
                path={isFullScreen ? undefined : "pointsofinterest"}
                onBackClick={isFullScreen ? handleBackClick : undefined}
            />
            {content()}
        </div>
    );
};

