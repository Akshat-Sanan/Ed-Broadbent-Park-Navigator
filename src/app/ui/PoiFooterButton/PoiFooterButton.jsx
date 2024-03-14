import React from 'react';
import styles from './poiFooterButton.module.css';

const Button = ({ imgSrc, link }) => {
    return (
        <a href={link} className={styles.footer_link}>
            <img className={styles.footer_link_img} src={imgSrc} />
        </a>
    );
};

export default Button;