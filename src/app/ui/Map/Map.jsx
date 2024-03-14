"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

//https://bettertyped.github.io/react-zoom-pan-pinch/?path=/story/docs-introduction
const Map = () => {
	return (
		<section className='mapWrapper'>
			<TransformWrapper
				// minScale={0.5}
				// maxScale={3}
				disablePadding={true}
			>
				<TransformComponent>
					<Image src='/Map.png' alt='Map' width={2298} height={1506} />
				</TransformComponent>
			</TransformWrapper>
		</section>
	);
};

export default Map;
