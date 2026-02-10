import "./footer.css"  

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section footer-contact">
                    <h3>Greg Johnson</h3>
                    <div className="footer-contact-images">
                        <img src={(import.meta.env.BASE_URL + "/assets/facebook-logo.png").replace(/\/+/g, '/')} />
                        <img src={(import.meta.env.BASE_URL + "/assets/instagram-logo.png").replace(/\/+/g, '/')} />
                        <img src={(import.meta.env.BASE_URL + "/assets/twitter-logo.png").replace(/\/+/g, '/')} />
                    </div>
                </div>

                <div className="footer-section footer-about">
                    <div>
                        <h3>About</h3>
                        <p>Greg Johnson's latest book is available to buy now.</p>
                    </div>
                    
                </div>
                
                <div className="footer-section footer-links">
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/greg-site/about">About Greg Johnson</a></li>
                            <li><a href="https://www.amazon.com/-/he/Greg-Johnson/dp/B0G9KXMJK1">Buy Now</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2026 Greg Johnson. All rights reserved.</p>
                <p>Website developed by <u>Eric Johnson.</u></p>
            </div>
        </footer>
    )
}