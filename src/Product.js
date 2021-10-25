import React from "react";

function Product (props) {
    return (
            <div className="col">
                <div className="card">
                    <img src={props.data.imgLink} className="card-img-top" alt="...." />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
            <p>Region: {props.data.region}</p>
            <p>Category: {props.data.category}</p>
            {
                props.data.phone &&
                <p>For more details call {props.data.phone}</p>
            }
            <button id="printButton" onClick={() => window.print()}>Print</button>
        </div>
                </div>
        </div>
    )
}
export default Product;
