import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './mobile.css';
import { FaStar, FaRupeeSign, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube, FaGoogle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import axios from "axios";

export default function Redmi() {

    const [mobile, setMobile] = useState([]);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const username = localStorage.getItem('username');
    const maxCartItems = 20;
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        axios.get("https://springboot-backend-project.onrender.com/mobiles/getAll", {"Headers" : {"Content-Type":"application/json"}})
        .then((res) => {
            const redmiMobiles = res.data.filter(mobiles => mobiles.category === 'redmi');
            console.log(redmiMobiles);
            setMobile(redmiMobiles);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleCart = (item) => {
        if (cart.length >= maxCartItems) {
            alert(`You have reached the cart limit. Only ${maxCartItems} items are allowed for checkout.`);
            return; 
        }
        setCart(prevCart => [...prevCart, item]);
    };

    const handleRemove = (item) => {
        setCart(prevCart => {
            const index = prevCart.findIndex(cartItem => cartItem.name === item.name);
            if(index !== -1) {
                const newCart = [...prevCart];
                newCart.splice(index, 1);
                return newCart;
            }
            else {
                return prevCart;
            }
        });
    };

    const handleCheckout = () => {
        if(cart.length > 0) {

            const totalPrice = cart.reduce((total, item) => {
                const cleanPrice = parseFloat(item.offerPrice.toString().replace(/[^0-9.-]+/g, ""));
                return total + (isNaN(cleanPrice) ? 0 : cleanPrice);
            }, 0);

            const formattedTotalPrice = totalPrice.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            alert(`Checkout successful! You have purchased ${cart.length} items. Total Price: ₹${formattedTotalPrice}`);
            setCart([]);
        }
        else {
            alert("Your cart is empty. Add items then proceed to checkout.");
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('cart');
        setCart([]);
    };

    return (

        <section className = "mobile_section">
            <div className = "main_navbar">
                <ul className = "main_menu">
                    <p className = "name">MS Mobiles</p>
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
                </ul>
            </div>

            <div className = "mobile_container">
                <p className = "heading">Redmi Mobile Collections</p>
            </div>

            <div className = "mobile_content">
                { mobile.map((item, index) => (
                    <div className = "mobile_card" key = {index}>

                        <img src = {item.image} alt = {item.name} />
                        <p className = "Pname">{item.name}</p>
                        <span className = "mobile_rating">
                            {item.rating} <FaStar />
                            <p className = "Prating">Ratings</p>
                        </span>

                        <div className = "mobile_price">
                            <p><span><FaRupeeSign /></span>{item.offerPrice}</p>
                            <s><span><FaRupeeSign /></span>{item.originalPrice}</s>
                        </div>

                        <div>
                            <button className = "mobile_btn" onClick = {() => handleCart(item)}>Add to cart</button>
                        </div>

                    </div>
                )) }
            </div>

            <div className = "cart_section">
                <h3>Cart List</h3>
                <div className = "button_container">
                    <button className = "cart_check" onClick = {handleCheckout}>Checkout</button>
                </div>
                { cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div className = "cart_align">
                            <div className = "cart_item" key = {index}>
                                <img src = {item.image} alt = {item.name} />
                                <p>{item.name}</p>
                                <p style = {{ color: 'green', fontWeight: 600 }}><FaRupeeSign />{item.offerPrice}</p>
                                <button className = "cart_remove" onClick = {() => handleRemove(item)}>Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                        <p>Your cart is empty</p>
                    )
                }
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
        </section>

    )

}
