import React, { useState } from "react";
import './mob_signup.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MobileSignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev, 
            [name]: value 
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);

        axios.post('https://springboot-backend-project.onrender.com/signup/saveData', formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            alert("Data Saved");
            console.log(res);
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            setIsLoading(false); 
            navigate("/mob_signup");
        })

        .catch((err) => {
            alert("Error Submitting Data");
            console.log(err);
            setIsLoading(false); 
        });
    
        console.log(formData);
    }

    return (

        <section className = "signup_section">
            <div className = "signup_container">
                <div className = "signup_content">
                    <h2 style = {{ fontFamily: 'Futura, sans-serif', fontWeight: '600', fontSize: '35px' }}>Sign Up</h2>

                    <form onSubmit = {handleSubmit}>
                        <div className = "signup_field">
                            <input type = "text" name = "name" value = {formData.name} placeholder = "Your Name" required autoComplete = "off" onChange={handleChange} />
                            <input type = "email" name = "email" value = {formData.email} placeholder = "Your Email" required autoComplete = "off" onChange={handleChange} />
                            <input type = "password" name = "password" value = {formData.password} placeholder = "Your Password" required autoComplete = "off" onChange={handleChange} />
                            {isLoading ? <div>Loading...</div> : <button type="submit" style={{ fontFamily: 'Futura, sans-serif' }}>Submit</button>}

                            <p className = "signup_login">Already have an Account? 
                                <Link style = {{ textDecoration: 'none', color: 'red' }} to = "/mob_signin">
                                    <b>login here</b>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )

}
