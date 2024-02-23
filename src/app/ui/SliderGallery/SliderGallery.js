// Slider Gallery Component
// This component is a slider gallery idea, it displays a list of images and allows the user to navigate trough more images trough a slider.
// If the user click on an image it is shown "highlithed" in the top 

// David Avendano ,Google & Copilot :)

// Allows the use of useState
"use client";
import React from 'react';
import { useState } from 'react';
import styles from './SliderGallery.module.css';

const SliderGallery = () => {
    const images = [
        "../assets/bookImage.png",
        "../assets/image2.png",
        "../assets/image3.png",
        /* Replace with actual images images */
        "https://placehold.co/667x375/FF0000/FFFFFF/png", // Red
        "https://placehold.co/667x375/FF7F00/FFFFFF/png", // Orange
        "https://placehold.co/667x375/FFFF00/FFFFFF/png", // Yellow
        "https://placehold.co/667x375/00FF00/FFFFFF/png", // Green
        "https://placehold.co/667x375/0000FF/FFFFFF/png", // Blue
        "https://placehold.co/667x375/4B0082/FFFFFF/png", // Indigo
        "https://placehold.co/667x375/8B00FF/FFFFFF/png", // Violet
    ];

    // State for the currently selected image, initially set to the first image
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // State for the current set of images being displayed, initially set to 0
    const [current, setCurrent] = useState(0);
    // Images to be displayed per screen
    const imagesPerScreen = 4;

    // Function to go to the next set of images
    const nextSlide = () => {
        // If the current set of images is the last one, go back to the first one, else go to the next one
        setCurrent(current === Math.floor(images.length / imagesPerScreen) ? 0 : current + 1);
    };

    // Function to go to the previous set of images
    const prevSlide = () => {
        setCurrent(current === 0 ? Math.floor(images.length / imagesPerScreen) : current - 1);
    };


    // ! Uncomment the following lines to enable touch events (I dont understand, provided by AI)
    //     const [touchStart, setTouchStart] = useState(0);
    //   const [touchEnd, setTouchEnd] = useState(0);

    //   const handleTouchStart = (e) => {
    //     setTouchStart(e.targetTouches[0].clientX);
    //   };

    //   const handleTouchMove = (e) => {
    //     setTouchEnd(e.targetTouches[0].clientX);
    //   };

    //   const handleTouchEnd = () => {
    //     if (touchStart - touchEnd > 150) {
    //       // do your stuff here for left swipe
    //       nextSlide();
    //     }

    //     if (touchStart - touchEnd < -150) {
    //       // do your stuff here for right swipe
    //       prevSlide();
    //     }
    //   };


    // Render the component
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={selectedImage} alt="description" />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.slider}>
                    <button onClick={prevSlide} className={styles.prevButton}>
                        <img className={styles.arrowIcon}src="../assets/arrowPrev.svg" alt="Previous" />

                    </button>
                    <div
                        className={styles.imagesContainer}



                    // ! Uncomment the following lines to enable touch events (I dont understand, provided by AI)
                    // onTouchStart={handleTouchStart}
                    // onTouchMove={handleTouchMove}
                    // onTouchEnd={handleTouchEnd}
                    >

                        {/* Slice duplicates the image array, then in that new array it takes 4 index map them to create a new array. (a subset of the images array) */}
                        {images.slice(current * imagesPerScreen, (current + 1) * imagesPerScreen).map((image, index) => (
                            // For each image in the subset, create an img element with the image source and an onClick event to set the selected image
                            <img
                                key={index}
                                src={image}
                                // Alt Thumbnail 1, 2, 3...
                                alt={`Thumbnail ${index + 1}`}
                                // onClick event to set the selected image
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className={styles.nextButton}>
                        <img className={styles.arrowIcon}src="../assets/arrowNext.svg" alt="Previous" />
                    </button>
                </div>

                {/* Dots for indicating the current slide  */}
                <div className={styles.dotsContainer}>

                    {/* Math.ceil=round to the next integer, fill() = fill all the elements in the array with undefined value/ map() = creates new array with a function added to each index? */}

                    {Array(Math.ceil(images.length / imagesPerScreen)).fill().map((_, index) => (
                        <span
                            // key is for react to know which element has changed, it should be unique
                            key={index}
                            className={`${styles.dot} ${current === index ? styles.dotActive : styles.dotInactive}`}

                            // onClick event to set the current image (alows to navigate to the set of images)
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Export the SliderGallery component
export default SliderGallery;