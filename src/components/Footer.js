import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We are a company dedicated to providing high-quality products and services to our customers.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Email: shachitanandk@gmail.com</li>
                            <li>Phone: +91 6202592138</li>
                            <li>Address:  Rohini ,Delhi</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#" title="Facebook" className="facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" title="Twitter" className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" title="Instagram" className="instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" title="LinkedIn" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024@ Sachita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer