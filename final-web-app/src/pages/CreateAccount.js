import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({CreateAccountFunction}) {
    return (
        <div className="Wrapper">
            <h1>Sign Up</h1>
            <div className="CreateWrapper">
                <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>
                <div className="SiteInfo">
                    <h2>Join AstrologyMemes today!</h2>
                    <p>a social network for astrology lovers</p>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;