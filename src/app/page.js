import styles from "./page.module.css";
import Link from "next/link";
import Map from "../ui/Map/Map";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [renderMap, setRenderMap] = useState(false);
	useEffect(()=>{
		if(typeof(window) !== "undefined"){
			setRenderMap(true);
		}
	})
	return (
		<main className={styles.appBody}>
			{renderMap ? <Map /> : undefined}
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
