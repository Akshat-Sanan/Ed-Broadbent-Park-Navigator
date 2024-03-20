import styles from "./page.module.css";
import Link from "next/link";
import Map from "../components/map";
import Image from "next/image";

export default function Home() {
	return (
		<main className=''>
			<Map />
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

				<Link href='/sos'>
					<button className='btn orange'>
						<Image src='/info.svg' alt='logo' width={50} height={50} />
					</button>
				</Link>
			</section>
		</main>
	);
}
