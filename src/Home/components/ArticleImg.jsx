import useFadeIn from "/Users/ericjohnson/gregjohnson-site/src/components/useFadeIn.jsx" 

export default function ArticleImg({data}) {
    const [ref, visible] = useFadeIn()

    const backImages = data.backImages.map((data) => {
        return (
            <img 
                className="article-back-img"
                id={data.id}
                src={(import.meta.env.BASE_URL + data.src).replace(/\/+/g, '/')}
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
                    className="article-img-main"
                    style={{height: data.height}} 
                    src={(import.meta.env.BASE_URL + data.src).replace(/\/+/g, '/')} 
                />
                {backImages != null && backImages}
            </div>
        </div>
    )
}