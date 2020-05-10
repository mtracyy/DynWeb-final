import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

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
        <div className="SinglePost Wrapper">
            <h1>{postData.postTitle}</h1>
            <img src={postData.image} alt={postData.id}/>
            <p>{postData.text}</p>
        </div>
    )
}

export default SinglePost;