import React from "react";
import './App.css';

function Product (props) {
    return (
            <div className="col">
                <div className="card h-80 w-52">
                    <img src={props.data.imgLink} className="card-img-top" alt="...." />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
            <p>Region: {props.data.region}</p>
            <p>Category: {props.data.category}</p>
            {
                props.data.phone &&
                <p>For more details call {props.data.phone}</p>
            }
        </div>
                </div>
        </div>
    )
}
export default Product;
