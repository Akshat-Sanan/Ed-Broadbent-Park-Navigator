"use client";
import Button from '../PoiFooterButton/PoiFooterButton';
import styles from './poiFooter.module.css';

export default function PoiFooter({ hasGallery, galleryLink }) {
  return (
    <footer className={styles.footer}>
      <Button imgSrc="/assets/location.svg" link="/" />
      {hasGallery ? (
        <Button imgSrc="/assets/pictures.svg" link={galleryLink} />
      ) : undefined}
      <Button imgSrc="/assets/ar.svg" link="./ar" />
    </footer>
  );
}
