"use client";
import React from 'react';
import styles from './components.module.css';
// import backIcon from './assets/back_btn_icon.svg';
// import logo from './assets/logo.png';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.back_btn}>
                    <img src='./assets/back_btn_icon.svg' />
                </div>
                <div className={styles.logo}>
                    <img src='./assets/logo.png' />
                </div>
            </header>
        </>
    );
};

export default Header;