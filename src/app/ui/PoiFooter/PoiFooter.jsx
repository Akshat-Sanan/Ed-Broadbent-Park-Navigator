"use client";
import Button from '../PoiFooterButton/PoiFooterButton';
import styles from './poiFooter.module.css';

export default function PoiFooter({ hasGallery, galleryLink, noAr, center}) {
  return (
    <footer className={`${styles.footer} ${center ? styles.center : ''}`}>
      <Button imgSrc="/assets/location.svg" link="/" />
      {hasGallery ? (
        <Button imgSrc="/assets/pictures.svg" link={galleryLink} />
      ) : undefined}
      {noAr ? 
      undefined 
      : <Button imgSrc="/assets/ar.svg" link="./ar" />} 
    </footer>
  );
}
