import "./home.css"
import { useRef } from "react"
import TitleImg from "./components/TitleImg"
import Article from "./components/Article"
import Nav from "../Nav/Nav.jsx"
import Footer from "../Footer/Footer.jsx"
import useParallax from "../components/useParallax.jsx"

export default function Home() {
    const backImgRef = useRef(null)
    useParallax(backImgRef, 0.08, 0.1)

    return (
        <>
            <Nav />
            <main>
                <TitleImg />
                <Article 
                    order={true} 
                    title="Beauty In Science" 
                    info={
                        <>
                            <i>"blends science and creativity, turning complex ideas like black holes, the multiverse, and quantum mechanics into engaging illustrations. Part educational, part meditative, it invites readers to explore the wonders of the universe through art."</i>
                            <br />
                            — Pine Tree Press
                        </>
                    }
                    src="/assets/71l40nn8R6L._SL1293_.jpg"
                    backImages={[
                        {
                            id: "article-backImg-book",
                            src: "/assets/book-texture.png"
                        }
                    ]}
                    buttonTxt="Buy Now"
                    link="https://google.com"
                    height="600px"
                />
                <img 
                    ref={backImgRef}
                    className="main-backImg" 
                    src={(import.meta.env.BASE_URL + "/assets/greg-art15.png").replace(/\/+/g, '/')} 
                />
                <Article 
                    order={false} 
                    title={
                        <>
                            Inspired <br />
                            Artworks
                        </>
                    }
                    info={
                        <>
                            <i>"It is rare to find a book that so seamlessly bridges the elegance of physics and cosmology with the power of visual art. Greg Johnson's Physics and Cosmology illustrated book is not merely a creative project––it is a bold invitation to experience the universe in a way that transcends traditional academic boundaries."</i>
                            <br />
                            — Dr. Zehlia Babaci-Wilhite 
                        </>
                    }
                    src="/assets/greg-art7.jpg"
                    backImages={[
                        {
                            id: "article-backImg-inspiration",
                            src: "/assets/greg-art7-texture.png"
                        }
                    ]}
                    height="600px"
                />
                <Article 
                    order={true} 
                    title="Greg Johnson" 
                    info="Greg Johnson is an artist and researcher from Berkeley, California. Trained in art history and fine arts, he has exhibited his work in galleries and contributed to STEAM anthologies. His passion lies in uniting art and science to spark curiosity and wonder." 
                    src="/assets/profile_photo.JPG"
                    backImages={[
                        {
                            id: "article-backImg-author",
                            src: "/assets/profile_photo-texture.png"
                        }
                    ]}
                    buttonTxt="Read More"
                    link="https://google.com"
                    height="500px"
                />

            </main>
            <Footer />
        </>
    )
}