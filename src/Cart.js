import React from "react";
import "./App.css"
import Cookies from "universal-cookie/lib";
import axios from "axios";
import Product from "./Product";
import Navigation from "./Navigation";

class Cart extends React.Component {
    state={
        cartList:[],
        username:""
    }
    componentDidMount() {
        const cookies = new Cookies();
        let token = cookies.get("token");
        axios.get("http://127.0.0.1:8988/get-user-cart", {
            params: {
                token: token
            }
        }).then(response => {
            let tempList = response.data;
            this.setState({
                cartList: tempList
            })
        })
        axios.get("http://127.0.0.1:8988/get-user", {
            params: {
                token: token
            }
        }).then(response => {
            let username = response.data.firstName;
            this.setState({
                username:username
            })
        })
    }

    render() {
        return (
            <div>
                <Navigation/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                      crossOrigin="anonymous"/>
                {this.state.cartList.length==0&&
                <h2 className="Title"> {this.state.username} your cart still empty</h2>}

                <div className="row row-cols-2 row-cols-md-5 g-4">
                    {this.state.cartList.map(product=>{
                        return( <Product data={product}/>)
                    })

                    }
                </div>
            </div>


        )
    }
}
export default Cart;
