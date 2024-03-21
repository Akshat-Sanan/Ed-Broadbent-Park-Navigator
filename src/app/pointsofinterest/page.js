import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
	return (
		<>
			<ul className={styles.pointsOfInterest}>
				<Link href='/pointsofinterest/edBroadBent'>
					<li className={`${styles.pointOfInterest} ${styles.first}`}>
						<p>ED BROADBENT </p>
					</li>
				</Link>

				<Link href='/pointsofinterest/amphitheather'>
					<li className={`${styles.pointOfInterest} ${styles.second}`}>
						<p className={styles.p}>AMPITHEATHER</p>
					</li>
				</Link>

				<Link href='/pointsofinterest/indigenousGarden'>
					<li className={`${styles.pointOfInterest} ${styles.third}`}>
						<p>INDIGENOUS GARDEN</p>
					</li>
				</Link>

				<Link href='/pointsofinterest/gardenOfHumanRights'>
					<li className={`${styles.pointOfInterest} ${styles.fourth}`}>
						<p>GARDEN OF HUMAN RIGHTS</p>
					</li>
				</Link>
			</ul >
		</>
	);
}
