import * as React from "react";
import {BrowserRouter, Link,NavLink} from "react-router-dom";
import './App.css'
import Cookies from "universal-cookie/lib";


class Navigation extends React.Component{
    state={
        token:"1",
        loggedIn:false
    }
    componentDidMount() {
        {
            const cookies = new Cookies();
            this.setState({
                loggedIn: cookies.get("logged_in")
            })
        }
    }
    logOut=()=>{
        const cookies = new Cookies();
        cookies.remove("logged_in");
        cookies.remove("token");
        this.setState({
            loggedIn: cookies.get("logged_in")
        })
        window.location.reload();
    }
    render()
    {return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
            <nav className="navbar navbar-dark main-bar">
            <div className="container-fluid">
                    <NavLink to={"/HomePage"} activeClassName="navbar-brand">
                        <img src="/images/bestgiftlogo.PNG" alt="" width="40" height="34" className="d-inline-block align-text-top logo"/>
                        <span className="navbar-brand barTitle"><button className="btn">Best Gift</button></span>
                    </NavLink>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><NavLink to={"/About"} activeClassName="links"><button className="btn">About Us</button></NavLink></li>
                    {!this.state.loggedIn &&
                    <li className="nav-item"><NavLink to={"/SignIn"} activeClassName="links"><button className="btn">Sign in</button></NavLink></li>
                    }
                    {this.state.loggedIn &&
                    <li className="nav-item"><NavLink to={"/Cart"} activeClassName="links"><button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg></button></NavLink></li>}
                    {this.state.loggedIn &&
                    <li className="nav-item"><button onClick={this.logOut} className="btn">Sign Out</button></li>}
                    <li className="nav-item"><NavLink to={"/SignUp"} activeClassName="links"><button className="btn">Sign Up</button></NavLink></li>
                </ul>
        </div>
        </nav>
        </div>
    );
    }
}
export default Navigation;
