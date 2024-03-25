import Gallery from "@/app/ui/Gallery/Gallery";
import poiData from "@/app/lib/poiData.js";

export default function gardenOfHumanRightsrGalleryPage() {

    const images = poiData[2].pages.filter(page => page.type === 'gallery')[0].images.map(image => image.bannerImage);

    return <>
        <Gallery header={poiData[2].title} images={images} backPath="/gardenOfHumanRights" numberOfImages={images.length} />
    </>
}