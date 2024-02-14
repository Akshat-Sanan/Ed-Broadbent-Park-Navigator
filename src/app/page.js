import styles from "./page.module.css";
import Link from "next/link";
import Map from "../components/map";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <Link href="/info">Info </Link>
        <Link href="/booking">Booking </Link>
        <Link href="/ar">AR </Link>
        <Link href="/pointsofinterest">Points of Interest </Link>

      </div>
      <Map />
    </main>
  );
}
