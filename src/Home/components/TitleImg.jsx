import useFadeIn from "/Users/ericjohnson/gregjohnson-site/src/components/useFadeIn.jsx" 


export default function TitleImg() {
    const [ref, visible] = useFadeIn()

    return (
        <div 
            ref={ref}
            className={`title-img fade-in ${visible ? "visible" : ""}`}
        >
            <div className="title-img-frame-overlay" />
            <div className="title-img-frame">
                <img src={(import.meta.env.BASE_URL + "/assets/greg-art16.png").replace(/\/+/g, '/')} />
                <img src={(import.meta.env.BASE_URL + "/assets/greg-art16.png").replace(/\/+/g, '/')} />
            </div>
            <div className="title-img-title">
                <h1>An Artist's Reaction To The Sciences</h1>
                <h2>By Greg Johnson</h2>
            </div>
        </div>
    )
}