import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './mob_signin.css';
import axios from "axios";

export default function MobileSignIn(props) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://springboot-backend-project.onrender.com/signup/getAll", {"Headers" : {"Content-Type":"application/json"}})
        .then((res) => {
            console.log("Data fetched successfully", res);
            setData(res.data);
        })
        .catch((err) => {
            console.log("Something went Wrong", err);
        })
    },[]);

    function handleSubmit() {
        console.log(email);
        console.log(password);

        if(email && password) {
            const user = data.find((users) => users.email === email && users.password === password);

            if(user) {
                var username = user.name;
                props.loginSuccess(username);

                alert("Login successfully");
                navigate("/mob_main");
            }

            else {
                alert("Invalid email or password!");
            }
        }

        else {
            alert("Please provide both email and password");
        }
    }

    return (

        <section className = "signin_section">
                <div className = "signin_container">
                    <div className = "signin_content">
                        <h2 style = {{ fontFamily: 'Futura, sans-serif', fontWeight: '600', fontSize: '33px' }}>Sign In</h2>

                        <form onSubmit = {handleSubmit}>
                            <div className = "signin_field">
                                <input type = "email" name = "email" placeholder = "Your Email" required autoComplete = "off" onChange = {(e) => {setEmail(e.target.value)}} />
                                <input type = "password" name = "password" placeholder = "Your Password" required autoComplete = "off" onChange = {(e) => {setPassword(e.target.value)}} />
                                <button type = "submit" style = {{ fontFamily: 'Futura, sans-serif' }}>Submit</button>

                                <p className = "signin_signup">I dont have an account
                                    <Link style = {{ textDecoration: "none", color: "red" }} to = "/mob_signup">
                                        <b>signup here</b>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
        </section>

    )

}
