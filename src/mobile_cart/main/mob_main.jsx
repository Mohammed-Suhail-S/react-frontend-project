import React, { useState } from "react";
import './mob_main.css';
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube, FaGoogle } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

export default function MobileMain(verify) {

    const [menu, SetMenu] = useState('');
    const username = localStorage.getItem('username');
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const handleSignOut = () => {
        localStorage.removeItem('username');
    };

    return (

        <section className="main_section">
            { verify ? (

                <div className = "main_container">
                    <div className = "main_nav">
                        <p className = "main_name">MS Mobiles</p>
                        <div className = "user">
                            <button className = "icon" onClick = {openModal}><FontAwesomeIcon icon = {faUser} style = {{marginTop: '5px', fontSize: '40px'}}/></button>
                            <p style = {{fontFamily: 'myFont', fontWeight: 'lighter'}}>Welcome <br/> {username}</p>
                            <div>
                                { open && (
                                    <div className="mobile_overlay">
                                        <div className="mobile_overlay_content">
                                            <h2>Do you want to Sign Out?</h2>
                                            <Link to = "/mob_signin">
                                                <button onClick = {handleSignOut} className="mobile_button1">Sign Out</button>
                                            </Link>
                                            <button onClick = {closeModal} className="mobile_button2">Close</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <ul className = "mobile_menu">
                        <li style = {{listStyle: 'none', marginTop: '23px'}} onClick = {() => {SetMenu("samsung")}}>
                            <Link className = "main_list" to = {"/samsung"}>
                                Samsung
                            </Link> { menu === "samsung" ? <br/> : null }
                        </li>

                        <li style = {{listStyle: 'none', marginTop: '23px'}} onClick = {() => {SetMenu("redmi")}}>
                            <Link className = "main_list" to = {"/redmi"}>
                                Redmi
                            </Link> { menu === "redmi" ? <br/> : null }
                        </li>

                        <li style = {{listStyle: 'none', marginTop: '23px'}} onClick = {() => {SetMenu("iphone")}}>
                            <Link className = "main_list" to = {"/iphone"}>
                                iPhone
                            </Link> { menu === "iphone" ? <br/> : null }
                        </li>

                        <li style = {{listStyle: 'none', marginTop: '23px'}} onClick = {() => {SetMenu("oppo")}}>
                            <Link className = "main_list" to = {"/oppo"}>
                                Oppo
                            </Link> { menu === "oppo" ? <br/> : null }
                        </li>

                        <li style = {{listStyle: 'none', marginTop: '23px'}} onClick = {() => {SetMenu("vivo")}}>
                            <Link className = "main_list" to = {"/vivo"}>
                                Vivo
                            </Link> { menu === "vivo" ? <br/> : null }
                        </li>
                    </ul>

                    <div className="section-container about-section">
                        <h2>About Us</h2>
                        <p>
                            At MS Mobiles, we believe in making shopping simpler, faster, and more enjoyable. Our mobile cart solution is designed to streamline the buying process, offering a seamless experience for customers on the go.
                        </p>
                    </div>

                    <div className="section-container services-section">
                        <h2>Services</h2>
                        <ul>
                            <li><strong>Fast Checkout:</strong> Streamlined checkout for a smooth shopping experience.</li>
                            <li><strong>Real-Time Inventory Updates:</strong> Always know what's in stock before you buy.</li>
                            <li><strong>Mobile-Friendly Design:</strong> Adaptive design for all your devices.</li>
                            <li><strong>Secure Payments:</strong> Multiple safe payment options.</li>
                            <li><strong>Order Tracking:</strong> Keep tabs on your order with real-time tracking.</li>
                        </ul>
                    </div>

                    <div className="section-container contact-section">
                        <h2>Contact Us</h2>
                        <div className="contact-details">
                            <p><strong>Name:</strong> Mohammed Suhail (MS Mobiles)</p>
                            <p><strong>Email:</strong> support@msmobiles.com</p>
                            <p><strong>Phone:</strong> +996-898-8815</p>
                            <p><strong>Address:</strong> 786 Mobile Street, Tech City</p>
                        </div>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    <footer className = "mobile_footer">
                        <div className = "mobile_icons">
                            <a href = "https://www.facebook.com" target = "_blank" className = "icon_link">
                                <FaFacebook className = "facebook_icon" />
                            </a>
                            <a href = "https://www.twitter.com" target = "_blank" className = "icon_link">
                                <FaTwitter className = "twitter_icon" />
                            </a>
                            <a href = "https://www.whatsapp.com" target = "_blank" className = "icon_link">
                                <FaWhatsapp className = "whatsapp_icon" />
                            </a>
                            <a href = "https://www.youtube.com" target = "_blank" className = "icon_link">
                                <FaYoutube className = "youtube_icon" />
                            </a>
                            <a href = "https://www.google.com" target = "_blank" className = "icon_link">
                                <FaGoogle className = "google_icon" />
                            </a>
                        </div>
                        <p className = "footer_text">© 2024 MS Mobiles <br/> All Rights Reserved</p>
                    </footer>
                </div>

            ) : null }
        </section>

    )

}
