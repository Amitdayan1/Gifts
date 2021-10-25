import * as React from "react";
import {Link} from "react-router-dom";

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
            <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <aside className="col-sm-4">
            <p>Pleas enter your details</p>
            <div className="card">
                <article className="card-body">
                    <Link to={"/SignUp"}><a href="" className="float-right btn btn-outline-primary">Sign up</a></Link>
                    <h4 className="card-title mb-4 mt-1">Sign in</h4>
                    <form>
                        <div className="form-group">
                            <label>Your email</label>
                            <input name="" className="form-control" placeholder="Email" type="email"/>
                         </div>
                        <div className="form-group">
                            <a className="float-right" href="#">Forgot?</a>
                            <label>Your password</label>
                            <input className="form-control" placeholder="*******" type="password" maxLength={8}/>
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <label> <input type="checkbox"/> Save password </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Login</button>
                        </div>
                    </form>
                </article>
            </div>
        </aside>
            </div>
    )
}}
export default SignIn;
