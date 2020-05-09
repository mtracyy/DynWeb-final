import React from "react";

function CreatePostForm({CreatePostFunction}) {
    return (
        <form className="Form CreatePostForm" onSubmit={(e) => CreatePostFunction(e)}>
            <label htmlFor="postText">Text</label>
            <input type="text" name="postText"/>
            <button>Submit</button>
        </form>
    );
}

export default CreatePostForm;