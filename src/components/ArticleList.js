import React from "react";
import Article from "./Article";

function ArticleList({ posts }){
    const postsElements = posts.map((post => {
        return <Article key={post.id} title={post.title} preview={post.preview}
        date={post.date} minutes={post.minutes} />
    }))
    return (
        <main>
            {postsElements}
        </main>
    )
}

export default ArticleList