import React from 'react';
import styles from './components.module.css';

const Button = ({ color, imgSrc, link }) => {
    return (
        <a href={link} className={styles.footer_link}>
            <button style={{ backgroundColor: color }} className={styles.footer_button}>
                <img src={imgSrc} />
            </button>
        </a>
    );
};

export default Button;