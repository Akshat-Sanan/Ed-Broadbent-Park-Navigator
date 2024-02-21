"use client";
import React from 'react';
import Button from './FooterButton';
import styles from './components.module.css';

const NavFooter = () => {
    return (
        <footer className={styles.footer}>
            <Button color="rgba(255, 122, 0, 1)" imgSrc="./assets/location.svg" link="#" />
            <Button color="rgba(255, 70, 70, 1)" imgSrc="/path/to/image2.png" link="#" />
            <Button color="rgba(255, 122, 0, 1)" imgSrc="/path/to/image3.png" link="#" />
        </footer>
    );
};

export default NavFooter;