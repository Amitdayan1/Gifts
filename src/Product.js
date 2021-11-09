import React from "react";
import './App.css';
import Cookies from "universal-cookie/lib";
import axios from "axios";


function Product (props) {
    return (
            <div className="col">
                <div className="card h-80 w-51">
                    <img src={props.data.imgLink} className="card-img-top" alt="...." />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
            <p>Region: {props.data.region}</p>
            <p>Category: {props.data.category}</p>
            {
                props.data.phone &&
                <p>For more details call {props.data.phone}</p>
            }
            <button onClick={()=> {
                const cookies = new Cookies();
                let token=cookies.get("token");
                cookies.set("product",props.data.uniqId);
                axios.get("http://127.0.0.1:8989/set-user-cart",{
                    params:{
                        token:token,
                        product:props.data.uniqId
                    }
                }).then(response=>{
                })
            }} > Add To Cart</button>
        </div>
                </div>
        </div>
    )
}
export default Product;
