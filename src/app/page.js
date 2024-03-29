import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Home() {
	const MovingMap = dynamic(()=> import("../ui/Map/Map"), {
		ssr: false
	})

	return (
		<main className={styles.appBody}>
			<MovingMap />
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
