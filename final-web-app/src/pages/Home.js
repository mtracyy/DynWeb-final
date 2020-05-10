import React, {useEffect, useState} from "react";
import axios from "axios";
//Components
import CreatePostForm from "../components/CreatePostForm";

function Home({userInfo, createPostWithImage}) {
    const [allPosts, setAllPosts] = useState([]);
    const email = userInfo.email;
    const uid = userInfo.uid;

    useEffect(() => {
        axios
            .get(
                //my API endpoint
                //local:
                `http://localhost:4000/`
                //production:
                //`https://gentle-meadow-83076.herokuapp.com/`
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

    //create a post
    // async function CreatePostFunction(e) {
    //     // e.preventDefault();
    //     let text = e.currentTarget.postText.value;
    //     const idFromText = text.replace(/\s+/g, "-").toLowerCase().substr(0, 16);
    //     let userID = uid;
    //
    //     axios
    //         .get(
    //             //my API endpoint
    //             //local:
    //             `http://localhost:4000/create?text=${text}&id=${idFromText}&userID=${userID}`
    //             //production:
    //             //`https://gentle-meadow-83076.herokuapp.com/`
    //         )
    //         .then(function (response) {
    //             // handle success
    //             console.log('response', response);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         });
    // }

    return (
        <div className="Wrapper">
            <h1>Welcome, {email}</h1>
            <div className="CreatePost">
                <h2>Add a post</h2>
                <CreatePostForm CreatePostFunction={createPostWithImage}/>
            </div>
            <div className="">
                <h2>Feed</h2>
                {allPosts.map((post, i) => (
                    <p key={i}><a href={`/post/${post.id}`}>{post.postTitle}</a></p>
                ))}
            </div>
        </div>
    );
}

export default Home;