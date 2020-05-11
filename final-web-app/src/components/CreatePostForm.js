import React from "react";

function CreatePostForm({CreatePostFunction}) {
    return (
        <form className="CreatePostForm" onSubmit={(e) => CreatePostFunction(e)}>
            <input type="text" placeholder="Title" name="postTitle"/>
            <input type="text" placeholder="Text" name="postText"/>
            <label htmlFor="postImage">Image</label>
            <div className="bottomLine">
                <input className="fileUpload" type="file" name="postImage" accept="image/*"/>
                <button>Post</button>
            </div>
        </form>
    );
}

export default CreatePostForm;