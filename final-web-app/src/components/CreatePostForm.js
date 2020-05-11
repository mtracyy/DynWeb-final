import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt, faImage} from '@fortawesome/free-solid-svg-icons'

function CreatePostForm({CreatePostFunction}) {
    return (
        <form className="CreatePostForm" onSubmit={(e) => CreatePostFunction(e)}>
            {/*<label htmlFor="postTitle">Title</label>*/}
            <input type="text" placeholder="Title" name="postTitle"/>
            {/*<label htmlFor="postText">Text</label>*/}
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