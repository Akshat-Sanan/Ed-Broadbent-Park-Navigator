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
				src='/logo.png'
				alt='logo'
				width={51.76}
				height={61}
			/>

			<section className='menu'>
				<button className='btn poi'>
					<Link href='/pointsofinterest'>
						<Image src='/point_of_interest.svg' alt='logo' width={50} height={50} />
					</Link>
				</button>
				<button className='btn sos'>
					<Link href='/sos'>
						<Image src='/sos.svg' alt='logo' width={50} height={50} />
					</Link>
				</button>
			</section>
		</main>
	);
}
