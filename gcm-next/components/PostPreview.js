import Link from "next/link";
import React from "react";

function PostPreview({ post }) {
    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={`/posts/${post.id}`}>
            <div className="postPreview">
                <h3>{post.attributes.title}</h3>
                <p>{post.attributes.description}</p>
            </div>
        </Link>
    );
}

export default PostPreview;
