import React from "react";

function CreateAccountForm({CreateAccountFunction}) {
    return (
        <div>
            <form className="EntryForm Form" onSubmit={(e) => CreateAccountFunction(e)}>
                <label htmlFor="createUsername">Name</label>
                <input type="text" name="createUsername"/>
                <label htmlFor="createEmail">Email</label>
                <input type="email" name="createEmail"/>
                <label htmlFor="createPassword">Password</label>
                <input type="password" name="createPassword"/>
                <button>Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccountForm;