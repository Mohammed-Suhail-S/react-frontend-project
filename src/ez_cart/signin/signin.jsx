import React, {useState, useEffect} from "react";
import './signin.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/data")
        .then((res) => {
            console.log("Data Fetched Successfully", res);
            setData(res.data);
        })
        .catch((err) => {
            console.log("Something went Wrong", err);
        })
    },[]);

    const handleSubmit = () => {
        console.log(email);
        console.log(password);

        if(email && password) {
            const user = data.find((user) => user.email === email && user.password === password);

            if(user) {
                var userName = user.name;
                props.success(userName);

                alert("You are logged in");
                navigate("/navbar");
            }

            else {
                alert("Logged failed. Invalid email or password");
            }
        }

        else {
            alert("Please provide both email and password");
        }
    }

    return (
        <div>
            
            <div className="sign_cont">
                <div className="signin_page">
                    <h1>Sign in</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="signin_fields">
                            <input type="email" name="email" placeholder="Your Email" onChange={(e) => {setEmail(e.target.value)}} />
                            <input type="password" name="password" placeholder="Your Password" onChange={(e) => {setPassword(e.target.value)}} />
                        </div>

                        <div className="submit_cont">
                            <p>Forgot Password?</p>
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                    <p>
                        I don't have an account
                        <Link style={{ textDecoration: "none", color: "#ff4141", marginLeft: '10px' }} to="/sign_up">
                            <b>signup here</b>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )

}
