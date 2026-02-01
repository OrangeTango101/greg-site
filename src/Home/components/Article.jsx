import ArticleImg from "./ArticleImg"
import ArticleInfo from "./ArticleInfo"

export default function Article(props) {
    const name = props.order ? "reverse" : ""

    return (
        <article 
            className={name}
        >
            {props.order ? 
                [<ArticleInfo data={props} />, <ArticleImg data={props} />]
                :
                [<ArticleImg data={props} />, <ArticleInfo data={props} />]
            }
        </article>
    )
}