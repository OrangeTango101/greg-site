import useFadeIn from "/Users/ericjohnson/gregjohnson-site/src/components/useFadeIn.jsx" 
import { Link } from 'react-router-dom'

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
            { data.link != null && 
                <Link className="nav-content-link" to={data.link}>
                    <button>
                        {data.buttonTxt}
                    </button> 
                </Link>
            }
        </div>

    )
}