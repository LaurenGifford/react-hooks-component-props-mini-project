import Article from "./Article"

function ArticleList(props) {
    const postsElements = props.posts.map(post => (
        <Article 
        key={post.id}
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutes={post.minutes}
        />
    ))
    return (
        <main>
            {postsElements}
        </main>
    )
}

export default ArticleList