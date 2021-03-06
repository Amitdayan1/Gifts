import * as React from "react";
import {Link,NavLink,Redirect } from "react-router-dom";
import './App.css'
import axios from "axios";
import Cookies from "universal-cookie/lib";
import Navigation from "./Navigation";

class SignIn extends React.Component{
    state = {
        username: "",
        password: "",
        token:"",
        showError: false,
        loggedIn:false,

}

    userNameChange=(event)=> {
        let value = event.target.value;
        this.setState({
            username: value
        })
    }
        passwordChange = (event) => {
            let value = event.target.value;
            this.setState({
                password: value
            })
        }
        logIn=()=>{
        axios.get("http://127.0.0.1:8988/sign-in",{
            params:{
                username:this.state.username,
                password:this.state.password
            }
        }).then((response)=>{
            if(response.data.length>0) {
                const cookies = new Cookies();
                cookies.set("logged_in", "true");
                cookies.set("token", response.data);
                 this.setState({
                    loggedIn:true
                })
                }
            else {
                this.setState({
                    showError: true
                        })
                    }
                })
            return this.state.loggedIn;
            }

    render() {
                if(this.state.loggedIn)
                    return(<Redirect to={"/HomePage"}/>)
           return(
        <div className="SignInAll">
            <Navigation/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                  crossOrigin="anonymous"/>
            <div className="wrapper body-inverse">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3>Sign In to your account</h3>
                            <p className="text-muted">
                                Please fill out the form below to login to your account.
                            </p>
                            <div className="form-white">
                                    <div className="form-group">
                                        <label> Username</label>
                                        <input type="text" className="form-control" id="username"
                                               placeholder="Enter Username" value={this.state.username}
                                               onChange={this.userNameChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password" maxLength={8} value={this.state.password}
                                               onChange={this.passwordChange}/>
                                    </div>
                                 <button className="btn btn-outline-primary" onClick={this.logIn} disabled={this.state.password.length==0||this.state.username.length==0}>Sign in</button>
                                <Link to={"/PasswordReset"}><p><a>Lost your password?</a></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.showError&&
            <div> Wrong Password/Username Try Again</div>}
        </div>
    )

}}
export default SignIn;
