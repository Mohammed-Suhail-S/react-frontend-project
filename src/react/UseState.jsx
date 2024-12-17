import { useState } from "react";

export default function StateExample() {
    
    const [user,setUser] = useState("Frontend");

    function change() {
        setUser("React JS");
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [counter,setCounter] = useState(0);

    function increment() {
        setCounter((prev) => prev + 1);
    }

    function decrement() {
        setCounter((prev) => prev - 1);
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [formData,setFormData] = useState({firstName: '', lastName: '', email: '', password: ''});

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData,name);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <h1>{user}</h1>
            <button style={{marginLeft: '20px'}} onClick={change}>Change</button>

            <h1>{counter}</h1>
            <button style={{marginLeft: '20px'}} onClick={increment}>+</button>
            <button style={{marginLeft: '20px'}} onClick={decrement}>-</button>

            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                <br />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                <br />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <br />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <br />
                <button type="submit">Signup</button>
            </form>
        </> 
    )

} 
