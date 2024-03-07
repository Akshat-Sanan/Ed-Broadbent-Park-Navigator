
export default function PoiSlide({children, imgSrc, imgAlt}){
    return <article>
        <img src={imgSrc} alt={imgAlt} />
        {children}
    </article>
}