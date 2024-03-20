import styles from "./poiSlide.module.css";

export default function PoiSlide({ children, imgSrc, imgAlt }) {
  return (
    <article className={styles.article}>
      <img className={styles.sliderImg} src={imgSrc} alt={imgAlt} />
      {children}
    </article>
  );
}
