import * as React from "react";
import "./App.css"


class SignUp extends React.Component{

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
                        <form role="form">
                            <div className="form-group">
                                <label form="name">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your name"/>
                            </div>
                            <div className="form-group">
                                <label form="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <label form="email2">Email address</label>
                                <input type="email" className="form-control" id="email2" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label form="password2">Password</label>
                                        <input type="password" className="form-control" id="password2" placeholder="Password" maxLength={8}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label form="password2">Repeat password</label>
                                        <input type="password" className="form-control" id="password3" placeholder="Password" maxLength={8}/>
                                    </div>
                                </div>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> I agree to the <a>Terms of Service</a> and<a>Privacy Policy</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Create an account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }}
export default SignUp;
