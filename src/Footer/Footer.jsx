import "./footer.css"  

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section footer-contact">
                    <h3>Greg Johnson</h3>
                    <div className="footer-contact-images">
                        <img src="src/assets/facebook-logo.png" />
                        <img src="src/assets/instagram-logo.png" />
                        <img src="src/assets/twitter-logo.png" />
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
                            <li><a href="about">About Greg Johnson</a></li>
                            <li><a href="#projects">Buy Now</a></li>
                            
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