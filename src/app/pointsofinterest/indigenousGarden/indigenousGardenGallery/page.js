import Gallery from "@/app/ui/Gallery/Gallery";
import poiData from "@/app/lib/poiData.js";

export default function indigenousGardenGalleryPage() {

    const images = poiData[1].pages.filter(page => page.type === 'gallery')[0].images.map(image => image.bannerImage);

    return <>
        <Gallery header={poiData[1].title} images={images} backPath="/indigenousGarden" numberOfImages={images.length} />
    </>
}