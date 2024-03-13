import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<ul className='pointsOfInterest'>
			<li className='pointsOfInterest'>
				<Image src='/ed.png' width={643} height={300} />
				<p>ED BROADBENT </p>
			</li>
			<li className='pointsOfInterest'>
				<Image src='/humanrights.png' width={643} height={300} />
				<p>GARDEN OF HUMAN RIGHTS</p>
			</li>
			<li className='pointsOfInterest'>
				<Image src='/amp.png' width={643} height={300} />
				<p>AMPHITHEATRE</p>
			</li>

			<li className='pointsOfInterest'>
				<Image src='/indigenous.png' width={643} height={300} />
				<p>INDIGENOUS GARDEN</p>
			</li>
		</ul>
	);
}
