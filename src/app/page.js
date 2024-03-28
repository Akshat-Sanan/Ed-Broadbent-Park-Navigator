import styles from "./page.module.css";
import Link from "next/link";
import Map from "../ui/Map/Map";
import Image from "next/image";

export default function Home() {
	return (
		<main className={styles.appBody}>
			{typeof(window) !== "undefined" ? <Map /> : undefined}
			<Image
				className='mainLogo'
				src='/assets/header_logo.svg'
				alt='logo'
				width={51.76}
				height={61}
			/>

			<section className='menu'>
				<Link href='/pointsofinterest' className=''>
					<button className='btn orange'>
						<Image src='/point_of_interest.svg' alt='logo' width={50} height={50} />
					</button>
				</Link>

				<Link href='/info'>
					<button className='btn orange'>
						<Image src='/info.svg' alt='logo' width={50} height={50} />
					</button>
				</Link>
			</section>
		</main>
	);
}
