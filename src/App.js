import * as React from "react";
import './App.css';
import {Route} from "react-router";
import {BrowserRouter, Link} from "react-router-dom"
import Product from "./Product";
import About from "./About";
import Cart from "./Cart";
import SignIn from "./SignIn";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";
import FooterBar from "./FooterBar";
import Cookies from "universal-cookie/lib";

class App extends React.Component {
    render(){
        return (
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <BrowserRouter>
                    <Navigation/>
                    <Route path={"/HomePage"} component={HomePage}/>
                    <Route path={"/About"} component={About}/>
                    <Route path={"/Cart"} component={Cart}/>
                    <Route path={"/SignIn"} component={SignIn}/>
                    <Route path={"/SignUp"} component={SignUp}/>
                    <Route path={"/PasswordReset"} component={PasswordReset}/>
                </BrowserRouter>
                <FooterBar/>
            </div>
        );}
}
export default App;
























































































































































































































































