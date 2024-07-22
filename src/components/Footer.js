import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <p>We are a company dedicated to providing high-quality products and services to our customers.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Email: shachitanandk@gmail.com</li>
                            <li>Phone: +91 6202592138</li>
                            <li>Address:  Rohini ,Delhi</li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <div class="social-icons">
                            <a href="#" title="Facebook" class="facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" title="Twitter" class="twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" title="Instagram" class="instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" title="LinkedIn" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024@ Sachita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer