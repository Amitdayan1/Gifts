import * as React from "react";
import './App.css';
import {Route} from "react-router";
import {BrowserRouter, Link} from "react-router-dom"
import Product from "./Product";
import About from "./About";
import Shop from "./Shop";
import SignIn from "./SignIn";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import SignUp from "./SignUp";

class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Navigation/>
                    <Route path={"/HomePage"} component={HomePage}/>
                    <Route path={"/About"} component={About}/>
                    <Route path={"/Shop"} component={Shop}/>
                    <Route path={"/SignIn"} component={SignIn}/>
                    <Route path={"/SignUp"} component={SignUp}/>
                </BrowserRouter>
            </div>
        );}
}
export default App;
























































































































































































































































