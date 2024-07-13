// Footer.js

import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">Logo</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla nec eros non lectus condimentum convallis. 
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; info@example.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <a href="#"><li>Events</li></a>
                        <a href="#"><li>Team</li></a>
                        <a href="#"><li>Mentors</li></a>
                        <a href="#"><li>Gallery</li></a>
                        <a href="#"><li>Terms</li></a>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form action="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..."></input>
                        <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                        <button type="submit" className="btn btn-big contact-btn">
                            <i className="fas fa-envelope"></i>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
