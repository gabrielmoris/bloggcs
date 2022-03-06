import axios from "axios";
import React from "react";

function PostPage({ post }) {
    return (
        <article>
            <header>
                <h1>{post.title}</h1>
                <h2>{post.description}</h2>
            </header>
        </article>
    );
}

export default PostPage;

export async function getStaticProps({ params }) {
    const postRes = await axios.get(
        `http://localhost:1337/api/posts/${params.id}`
    );

    return {
        props: {
            post: postRes.data.data.attributes,
        },
    };
}

export async function getStaticPaths() {
    const postsRes = await axios.get("http://localhost:1337/api/posts#");

    const paths = postsRes.data.data.map((post) => {
        return { params: { id: post.id.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
}
