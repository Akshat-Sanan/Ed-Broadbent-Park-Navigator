"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "./ui/Header";
import Content from "./ui/Content";
import ButtonBook from "./ui/ButtonBook";
import NavFooter from "./ui/NavFooter";

import styles from "./page.module.css";


export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <Header></Header>
        <Content></Content>
        <ButtonBook onClick={() => console.log('Button clicked!')}></ButtonBook>
        <NavFooter></NavFooter>
      </main>
    </>
  );
}
