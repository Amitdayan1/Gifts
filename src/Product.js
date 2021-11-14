import React from "react";
import './App.css';
import Cookies from "universal-cookie/lib";
import axios from "axios";


function Product (props) {
    console.log(props.data)
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
            {!props.data.selected &&
            <button className="btn" onClick={()=> {
                const cookies = new Cookies();
                let token=cookies.get("token");
                cookies.set("product",props.data.uniqId);
                axios.get("http://127.0.0.1:8989/set-user-cart",{
                    params:{
                        token:token,
                        uniqId:props.data.uniqId
                    }
                }).then(response=> {

                })

            }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     className="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path
                        d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path
                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg></button>
           }
           {props.data.selected&&
                            <div>
                        <button className="btn" onClick={()=> {
                            const cookies = new Cookies();
                            let token=cookies.get("token");
                            cookies.set("product",props.data.uniqId);
                            axios.get("http://127.0.0.1:8989/update-user-cart",{
                                params:{
                                    token:token,
                                    uniqId:props.data.uniqId
                                }
                            }).then(response=>{

                            })
                        }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-cart-dash" viewBox="0 0 16 16">
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                                <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg></button></div>}
        </div>
                </div>
        </div>
    )
}
export default Product;
