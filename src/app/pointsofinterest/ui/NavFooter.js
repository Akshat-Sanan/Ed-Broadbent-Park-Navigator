"use client";
import React from 'react';
import Button from './FooterButton';
import styles from './components.module.css';

const NavFooter = () => {
    return (
        <footer className={styles.footer}>
            <Button imgSrc="./assets/location.svg" link="#" />
            <Button imgSrc="/assets/pictures.svg" link="#" />
            <Button imgSrc="/assets/ar.svg" link="#" />
        </footer>
    );
};

export default NavFooter;