import * as React from "react";
import {BrowserRouter, Link} from "react-router-dom";

import './App.css';
class Navigation extends React.Component{
    render()
    {return(
        <ul>
            <Link to={"/HomePage"}><li><a>Home</a></li></Link>
            <Link to={"/About"}><li><a>About us</a></li></Link>
            <Link to={"/Shop"}><li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Shop</a>
                <div className="dropdown-content">
                    <a href="#">Man</a>
                    <a href="#">Woman</a>
                    <a href="#">Kids</a>
                </div>
            </li>
            </Link>
            <Link to={"/SignIn"}> <li><a>Sign in</a></li></Link>
            <Link to={"/SignUp"}> <li><a>Sign Up</a></li></Link>
        </ul>


    );
    }
}
export default Navigation;
