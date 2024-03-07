import InformationSect from "@/app/ui/InformationSect/InformationSect";
import PoiFooter from "@/app/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/app/ui/PoiSlide/PoiSlide";


export default function EdBroadBentPage(){
    return<>
        <PoiSlide imgSrc={"/assets/pois/edBroadBent/broadBentandSingh.png"} imgAlt={"Ed Broadbent and Jagmeet Singh at the waterfront park."}>
            <InformationSect/>
        </PoiSlide>
        <PoiFooter />
    </>
}