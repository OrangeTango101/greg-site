import useFadeIn from "/Users/ericjohnson/gregjohnson-site/src/components/useFadeIn.jsx" 

export default function ArticleImg({data}) {
    const [ref, visible] = useFadeIn()

    const backImages = data.backImages.map((data) => {
        return (
            <img 
                className="article-back-img"
                id={data.id}
                src={data.src}
            />
        )
    })

    return (
        <div 
            ref={ref}
            className={`article-img fade-in ${visible ? "visible" : ""}`}
            style={{justifyContent: data.order ? "flex-start" : "flex-end"}}
        >
        
            <div className="article-img-frame">
                <img 
                    style={{height: data.height}} 
                    src={data.src} 
                />
                {backImages != null && backImages}
            </div>
        </div>
    )
}