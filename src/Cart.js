import React from "react";
import "./App.css"
import Cookies from "universal-cookie/lib";
import axios from "axios";
import Product from "./Product";

class Cart extends React.Component {
    state={
        cartList:[]
    }
    componentDidMount() {
    const cookies=new Cookies();
    let token=cookies.get("token");
    axios.get("http://127.0.0.1:8989/get-user-cart",{
        params:{
            token:token
        }
    }).then(response=>{
            let tempList=response.data;
            console.log(tempList)
            this.setState({
            cartList:tempList
            })
    })}


    render() {
        return (
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                      crossOrigin="anonymous"/>
                <div className="row row-cols-1 row-cols-md-4 g-4">
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
