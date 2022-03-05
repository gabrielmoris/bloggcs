import React from "react";
import AllPostsList from "../components/AllPostsList";
import axios from "axios";

function Posts({ posts }) {
    return (
        <>
            <AllPostsList posts={posts} />
        </>
    );
}

export default Posts;

export async function getStaticProps() {
    const postsRes = await axios.get("http://localhost:1337/api/posts#");
    // console.log("DATA ",postsRes.data.data[0]);
    return {
        props: {
            posts: postsRes.data.data,
        },
    };
}
