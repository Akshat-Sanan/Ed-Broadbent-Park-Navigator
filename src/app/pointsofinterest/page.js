"use client";
import InformationSect from "../ui/InformationSect/InformationSect";
import PoiFooter from "../ui/PoiFooter/PoiFooter";
import PoiHeader from "../ui/PoiHeader/PoiHeader.jsx";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <PoiHeader></PoiHeader>
        <InformationSect/>
        <PoiFooter />
      </main>
    </>
  );
}
