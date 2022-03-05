import React from "react";
import PostPreview from "./PostPreview";

function AllPostsList({posts}) {

    function renderAllPosts() {
        return posts.map((post) => {
            return <PostPreview post={post} key={post.id} />;
        });
    }

    return (
        <>
            <h2>All posts:</h2>
            {renderAllPosts()}
        </>
    );
}

export default AllPostsList;
