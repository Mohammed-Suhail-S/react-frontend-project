import React, { useState } from "react";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    function handleChange (e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleSubmit () {
        axios.post("http://localhost:3000/data", formData)
        .then((res) => {
            console.log(res);
            alert("Data Saved")
        })
        .catch((err) => {
            console.log(err);
        })

        navigate("/sign_up");
        console.log(formData);
    };

    return (
        <div className="login_container">
            <div className="login">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login_fields">
                        <input type="text" name="name" placeholder="Your Name" onChange={handleChange}/>
                        <input type="email" name="email" placeholder="Your Email" onChange={handleChange}/>
                        <input type="password" name="password" placeholder="Your Password" onChange={handleChange}/>
                    </div>
                    <button type="submit">Continue</button>
                </form>

                <p className="login_acc">Already have an Account?{' '}
                    <Link style={{ textDecoration: 'none', color: '#ff4141' }} to="/sign_in">
                        login here
                    </Link>
                </p>
            </div>
        </div>
    )
}
