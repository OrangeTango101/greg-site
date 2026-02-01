import useFadeIn from "/Users/ericjohnson/gregjohnson-site/src/components/useFadeIn.jsx" 

export default function ArticleInfo({ data }) {
    const [ref, visible] = useFadeIn()

    return (
        <div 
            ref={ref}
            className={`article-info fade-in ${visible ? "visible" : ""}`}
            style={{
                alignItems: data.order ? "flex-end" : "flex-start", 
                textAlign: data.order ? "right" : "left",
                "--delay": "1.5s" 
            }}
        >
            <h2>{data.title}</h2>
            <p>{data.info}</p>
            { data.link != null && <button>{data.buttonTxt}</button> }
        </div>

    )
}