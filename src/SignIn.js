import * as React from "react";
import {Link} from "react-router-dom";
import './App.css'

class SignIn extends React.Component{
    state = {
        userName: "",
        password: ""

}
    userNameChange=(event)=> {
        let value = event.target.value;
        this.setState({
            userName: value
        })
    }
        passwordChange = (event) => {
            let value = event.target.value;
            this.setState({
                password: value
            })
        }
    render() {
        return (
            <div className="SignInAll">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <div className="wrapper body-inverse">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <h3>Sign In to your account</h3>
                                <p className="text-muted">
                                    Please fill out the form below to login to your account.
                                </p>
                                <div className="form-white">
                                    <form role="form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password"
                                                   placeholder="Password" maxLength={8}/>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> Remember me
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary">Submit
                                        </button>
                                    </form>
                                    <Link to={"/PasswordReset"}><p><a>Lost your password?</a></p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}}
export default SignIn;
