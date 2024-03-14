"use client";
import Link from "next/link";
import styles from "./poiHeader.module.css";

export default function PoiHeader({ path="", onBackClick, title}) {
  return (
    <header className={styles.header}>
      {onBackClick ? (
        <div className={styles.back_btn} onClick={onBackClick}>
          <img src="/assets/back_btn_icon.svg" />
        </div>
      ) : (
        <Link className={styles.back_btn} href={`../${path}`}>
          <img src="/assets/back_btn_icon.svg" />
        </Link>
      )}
      {title ? <h1>{title}</h1> : undefined}
      <Link className={styles.logo} href={"/"}>
        <img src="/assets/bpn_logo.svg" width={47} height={57} />
      </Link>
    </header>
  );
}

