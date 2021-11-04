import * as React from "react";
import {BrowserRouter, Link,NavLink} from "react-router-dom";
import './App.css'
import FooterBar from "./FooterBar";

class Navigation extends React.Component{
    render()
    {return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
            <navbar className="navbar navbar-dark main-bar">
            <div className="container-fluid">
                    <NavLink to={"/HomePage"} activeClassName="navbar-brand"><a>
                        <img src="/images/bestgiftlogo.PNG" alt="" width="40" height="34" className="d-inline-block align-text-top logo"/>
                        <span className="navbar-brand barTitle">Best Gift</span>
                    </a></NavLink>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><NavLink to={"/About"} activeClassName="links">About us</NavLink></li>
                    <li className="nav-item"><NavLink to={"/SignIn"} activeClassName="links">Sign in</NavLink></li>
                    <li className="nav-item"><NavLink to={"/SignUp"} activeClassName="links">Sign Up</NavLink></li>
                </ul>
        </div>
        </navbar>
        </div>
    );
    }
}
export default Navigation;
