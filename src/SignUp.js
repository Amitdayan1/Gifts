import * as React from "react";
import "./App.css"
import axios from "axios";
import Cookies from "universal-cookie";


class SignUp extends React.Component{
    state ={
        firstName:"",
        lastName:"",
        username:"",
        emailAddress:"",
        password1:"",
        password2:"",
        success:false
    }
    firstNameChange=(event)=>{
        let value =event.target.value;
        this.setState({
            firstName:value
        })
    }
    lastNameChange=(event)=>{
        let value =event.target.value;
        this.setState({
            lastName:value
        })
    }
    userNameChange=(event)=>{
        let value =event.target.value;
        this.setState({
            username:value
        })
    }
    emailChange=(event)=>{
        let value =event.target.value;
        this.setState({
            emailAddress:value
        })
    }
    password1Change=(event)=>{
        let value =event.target.value;
        this.setState({
            password1:value
        })
    }
    password2Change=(event)=>{
        let value =event.target.value;
        this.setState({
            password2:value
        })
    }
    fieldsCheck=()=>{
        if(this.state.password1.length>0 && this.state.password1==this.state.password2 &&
            this.state.firstName.length>0&&this.state.lastName.length>0&&
            this.state.username.length>0&&this.state.emailAddress.length>0)
            this.setState({
                success:true
            })
        else {
            alert("One or more details are wrong")
        }
    }
    accountCreated=()=>{
        this.fieldsCheck();
        if(this.state.success){
        }
        axios.get("http://127.0.0.1:8989/sign-up",{
            params: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                emailAddress: this.state.emailAddress,
                password: this.state.password1
            } })
            .then((response)=>{
            if (response.data){
                alert("user created")}
        }
            )}

    render() {
        return (
            <div className="SignUpAll">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <div className="col-sm-5 col-sm-offset-1">
                    <h3 className="text-right-xs">Sign Up to your account</h3>
                    <p className="text-muted text-right-xs">
                        Please fill out the form below to create a new account.
                    </p>
                    <div className="form-white">
                            <div className="form-group">
                                <label form="name">First Name</label>
                                <input type="text" className="form-control" id="FirstName" placeholder="First name" value={this.state.firstName} onChange={this.firstNameChange}/>
                            </div>
                            <div className="form-group">
                                <label form="name">Last Name</label>
                                <input type="text" className="form-control" id="LastName" placeholder="Last name" value={this.state.lastName} onChange={this.lastNameChange}/>
                            </div>
                            <div className="form-group">
                                <label form="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Username" value={this.state.username} onChange={this.userNameChange}/>
                            </div>
                            <div className="form-group">
                                <label form="email2">Email address</label>
                                <input type="email" className="form-control" id="email2" placeholder="Enter email" value={this.state.emailAddress} onChange={this.emailChange}/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label form="password2">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" maxLength={8} value={this.state.password1} onChange={this.password1Change}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label form="password2">Repeat password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Repeat Password" maxLength={8} value={this.state.password2} onChange={this.password2Change}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <br></br>
                            <button className="btn btn-outline-primary" onClick={this.accountCreated}>Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }}
export default SignUp;
