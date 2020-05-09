import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({CreateAccountFunction}) {
    return (
        <div className="Wrapper">
            <h1>Sign Up</h1>
            <div className="CreateWrapper">
                <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>
                <div className="SiteInfo">
                    <h2>About Logo Site</h2>
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;