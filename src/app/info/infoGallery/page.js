import Gallery from "@/app/ui/Gallery/Gallery";
import poiData from "@/app/lib/poiData.js";

export default function InfoGalleryPage() {

    const images = poiData[4].pages.filter(page => page.type === 'gallery')[0].images.map(image => image.bannerImage);

    return <>
        <Gallery header={"ED BROADBENT WATERFRONT PARK"} images={images} backPath="/info" numberOfImages={images.length} />
    </>
}