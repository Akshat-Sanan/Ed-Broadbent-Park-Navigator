import React, { useState } from "react";
import styles from "./sliderButtons.module.css";

export default function SliderButtons({
  currentIndex,
  setCurrentIndex,
  info,
}) {
  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      {currentIndex < info.length - 1 && (
        <button className={styles.next_button} onClick={nextImage}>
          <img src={"/assets/slider_arrow.png"} />
        </button>
      )}
      {currentIndex > 0 && (
        <button className={styles.prev_button} onClick={prevImage}>
          <img src={"/assets/slider_arrow.png"} />
        </button>
      )}
    </>
  );
}
