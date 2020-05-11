import React, {useEffect, useState} from "react";
import axios from "axios";
//Components
import CreatePostForm from "../components/CreatePostForm";

function Home({userInfo, createPostWithImage}) {
    const [allPosts, setAllPosts] = useState([]);
    const username = userInfo.displayName;

    useEffect(() => {
        axios
            .get(
                //my API endpoint
                //local:
                // `http://localhost:4000/`
                //production:
                `https://gentle-meadow-83076.herokuapp.com/`
            )
            .then(function (response) {
                // handle success
                setAllPosts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div className="Home_wrapper">
            <div className="Home_header_wrapper">
                <h1>Welcome, {username}</h1>
                <div className="CreatePost">
                    <h2>Add a post</h2>
                    <CreatePostForm CreatePostFunction={createPostWithImage}/>
                </div>
            </div>
            <h2 className="feed_label">Feed</h2>
            <div className="feed">
                {allPosts.map((post, i) => (
                    <div className="feedPostContainer" key={i}>
                        <a href={`/post/${post.id}`}>
                            <h3>{post.postTitle}</h3>
                            <p>{post.text}</p>
                            <div className="imageContainer">
                                <img src={post.image} alt={post.id}/>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;