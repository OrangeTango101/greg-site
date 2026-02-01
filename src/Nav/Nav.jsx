import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div className="nav-title">
                <Link className="nav-content-link" to="/">
                    <h2>An Artist's Reaction To The Sciences</h2>
                </Link>
            </div>
            <div className="nav-content">
                <a className="nav-content-link">Buy The Book</a> 
                <Link className="nav-content-link" to="/about">About The Author</Link>
            </div>
        </nav>
    )
}