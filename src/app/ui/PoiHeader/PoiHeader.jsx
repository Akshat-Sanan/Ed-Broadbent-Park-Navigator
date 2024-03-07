"use client";
import Link from 'next/link';
import styles from './poiHeader.module.css';

export default function PoiHeader({onClick}){
    return (
        <header className={styles.header}>
            <Link className={styles.back_btn} href={onClick ? undefined : "../"} onClick={onClick} >
                <img src='./assets/back_btn_icon.svg' />
            </Link>
            <Link className={styles.logo} href={"/"}>
                <img src='./assets/bpn_logo.svg' width={47} height={57}/>
            </Link>
        </header>
    );
};