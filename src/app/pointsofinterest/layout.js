import Link from "next/link";
import Image from "next/image";

export default function POILayout({
	children, // will be a page or nested layout
}) {
	return (
		<main>
			<header className='header'>
				<button className='btn'>
					<Link href='/'>
						<Image src='/back.svg' width={28} height={28} />
					</Link>
				</button>

				<Image src='/logo.png' alt='logo' width={51.76} height={61} />
			</header>

			{children}
		</main>
	);
}
