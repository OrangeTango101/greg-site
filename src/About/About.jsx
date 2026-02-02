import "./about.css"
import Nav from "../Nav/Nav.jsx"
import Footer from "../Footer/Footer.jsx"
import useFadeIn from "/Users/ericjohnson/gregjohnson-site/src/components/useFadeIn.jsx"

export default function About() {
    const [ref, visible] = useFadeIn()

    return (
        <>
            <Nav />
                <div 
                    ref={ref}
                    className={`about-content fade-in ${visible ? "visible" : ""}`}
                >
                    <div className="about-image">

                        <img src={(import.meta.env.BASE_URL + "/assets/profile_photo.JPG").replace(/\/+/g, '/')} />
                    </div>
                    <div className="about-description">
                        <h1>Greg Johnson is an Artist and Scholar</h1>
                        <p>
                            Greg Johnson is an artist and researcher from Berkeley, California. Trained in art history and fine arts, he has exhibited his work in galleries and contributed to STEAM anthologies. He earned his degree in Art History from the college of Wooster in Wooster, Ohio, and continued his studies at the California College of Arts and Crafts in Oakland, California; the Vancouver Art Institute; and the Madison Commercial Art School. 
                            <br />
                            <br />
                            In addition to his artistic pursuits, Greg Johnson worked as a Study Coordinator for COVANCE Research Laboratories. His art projects include cotributions to a mural project for the National Democratic Party in British Columbia (1980s); a grant-funded mural for the Madison and Dane County Arts Council for youth (1994); and <i>Art on Sight and Sound</i> for the Wisconsin Council for the Blind (2000). Johnson has also contributed to three anthologies on STEAM education, as well as a book in French on art history titled <i>Paris to New York</i>. His work has been exhibited in the Madison Cooperative Gallery and several private galleries.
                        </p>
                    </div>
                </div>
            <Footer />
        </>

    )


}