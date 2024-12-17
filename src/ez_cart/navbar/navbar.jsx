import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = ({authenticate}) => {

    const [menu, SetMenu] = useState('');
    const username = localStorage.getItem('username');

    return (
        <>
            { authenticate ? (
                <div className="nav_bar">
                    <div className="nav_container">
                        <div className="nav_left">
                            <div className="brand">
                                <p className="name">SHOP</p>
                            </div>

                            <ul className="nav_menu">
                                <li onClick={() => { SetMenu("shop")}}>
                                    <Link style={{textDecoration:"none", color:'#ddd'}} to={"/latest"}>
                                        Latest
                                    </Link> {menu === "shop" ? <hr /> : null}
                                </li>
                                <li onClick={() => { SetMenu("mens")}}>
                                    <Link style={{textDecoration:"none", color:'#ddd'}} to={"/mens"}>
                                        Mens
                                    </Link> {menu === "mens" ? <hr /> : null}
                                </li>
                                <li onClick={() => { SetMenu("womens")}}>
                                    <Link style={{textDecoration:"none", color:'#ddd'}} to={"/womens"}>
                                        Womens
                                    </Link> {menu === "womens" ? <hr /> : null}
                                </li>
                                <li onClick={() => { SetMenu("kids")}}>
                                    <Link style={{textDecoration:"none", color:'#ddd'}} to={"/kids"}>
                                        Kids
                                    </Link> {menu === "kids" ? <hr /> : null}
                                </li>
                            </ul>
                        </div>

                        <div className="right_nav">
                            <div className="user">
                                <span><FaUser/></span>
                                <p>{username}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ): null}
        </>
    )

}

export default Navbar; 
