import React from "react";
import axios from "axios";

function Home({ posts }) {
    return (
        <>
            <h1>{posts[0].attributes.title}</h1>
            <h1>{posts[1].attributes.title}</h1>
        </>
    );
}

export default Home;

export async function getStaticProps() {
    const postsRes = await axios.get("http://localhost:1337/api/posts#");
    // console.log("DATA ",postsRes.data.data[0]);
    return {
        props: {
            posts: postsRes.data.data,
        },
    };
}
