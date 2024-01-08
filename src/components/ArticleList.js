import Article from "./Article";
function ArticleList({posts}){
    console.log(posts)
    const articles = posts.map((post) => {
        return <Article key={post.id} post={post}/>

    })


    return (
        <main>
            {articles}
        </main>
    )
}
export default ArticleList;