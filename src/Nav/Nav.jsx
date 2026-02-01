import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div className="nav-title">
                <Link className="nav-content-link" to="/greg-site/">
                    An Artist's Reaction To The Sciences
                </Link>
            </div>
            <div className="nav-content">
                <a className="nav-content-link">Buy The Book</a> 
                <Link className="nav-content-link" to="/greg-site/about">About The Author</Link>
            </div>
        </nav>
    )
}