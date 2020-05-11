import React from "react";

function LoginForm({LoginFunction}) {
    return (
        <form className="Form LoginForm" onSubmit={(e) => LoginFunction(e)}>
            <label htmlFor="loginEmail">Email</label>
            <input type="email" name="loginEmail"/>
            <label htmlFor="loginPassword">Password</label>
            <input type="password" name="loginPassword"/>
            <button className="SubmitBtn">Submit</button>
        </form>
    );
}

export default LoginForm;