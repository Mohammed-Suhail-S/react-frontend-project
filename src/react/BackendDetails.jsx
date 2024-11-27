import axios from "axios";
import { useState, useEffect } from "react";

export default function Backend() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/product/getAll", {"Headers" : {"Content-Type":"application/json"}})
        .then((res) => {
            console.log(res); 
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    return (
            product.map((pro) => (<h1 key={pro.id}>{pro.productName}</h1>))
    )

}
