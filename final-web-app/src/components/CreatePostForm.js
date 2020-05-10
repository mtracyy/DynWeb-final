import React from "react";

function CreatePostForm({CreatePostFunction}) {
    return (
        <form className="Form CreatePostForm" onSubmit={(e) => CreatePostFunction(e)}>
            <label htmlFor="postTitle">Title</label>
            <input type="text" name="postTitle"/>
            <label htmlFor="postText">Text</label>
            <input type="text" name="postText"/>
            <label htmlFor="postImage">Image</label>
            <input type="file" name="postImage" accept="image/*"/>
            <button>Submit</button>
        </form>
    );
}

export default CreatePostForm;