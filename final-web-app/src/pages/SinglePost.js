import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

function SinglePost() {
    const [postData, setPostData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(
                //my API endpoint
                //local:
                `http://localhost:4000/post/${id}`
                //production:
                //`https://gentle-meadow-83076.herokuapp.com/`
            )
            .then(function (response) {
                // handle success
                setPostData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div className="Wrapper">
            <div className="SinglePost">
                <div className="postDesc">
                    <h1>{postData.postTitle}</h1>
                    <p>{postData.text}</p>
                    <div className="socialBtns">
                        <button><FontAwesomeIcon icon={faThumbsUp}/> Like</button>
                        <button><FontAwesomeIcon icon={faCommentAlt}/> Comment</button>
                    </div>
                </div>
                <img src={postData.image} alt={postData.id}/>
            </div>
        </div>
    )
}

export default SinglePost;