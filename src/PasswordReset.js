import * as React from "react";

function PasswordReset () {
    return (


<div id="lost-form">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
    <p>Enter your email address and we will send you a link to reset your
        password.</p>
    <form role="form">
        <div className="form-group">
            <label htmlFor="email-lost">Email address</label>
            <input type="email" className="form-control" id="email-lost"
                   placeholder="Enter email"/>
        </div>
        <button type="submit" className="btn btn-default">Send</button>
    </form>
</div>
)}
export default PasswordReset;
