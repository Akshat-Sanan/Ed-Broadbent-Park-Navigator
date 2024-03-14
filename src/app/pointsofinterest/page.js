import Image from "next/image";
import Link from "next/link";
import PoiHeader from "../ui/PoiHeader/PoiHeader";

export default function Page() {
	return (
		<>
			<PoiHeader title="Points of Interest"></PoiHeader>
			<ul className='pointsOfInterest'>
				<Link href='/pointsofinterest/edBroadBent'>
					<li className='pointsOfInterest'>
						<Image src='/ed.png' width={643} height={300} />
						<p>ED BROADBENT </p>
					</li>
				</Link>

				<Link href='/pointsofinterest/gardenOfHumanRights'>
					<li className='pointsOfInterest'>
						<Image src='/humanrights.png' width={643} height={300} />
						<p>GARDEN OF HUMAN RIGHTS</p>
					</li>
				</Link>

				<Link href='/pointsofinterest/amphitheather'>
					<li className='pointsOfInterest'>
						<Image src='/amp.png' width={643} height={300} />
						<p>AMPHITHEATRE</p>
					</li>
				</Link>

				<Link href='/pointsofinterest/indigenousGarden'>
					<li className='pointsOfInterest'>
						<Image src='/indigenous.png' width={643} height={300} />
						<p>INDIGENOUS GARDEN</p>
					</li>
				</Link>
			</ul >
		</>
	);
}
