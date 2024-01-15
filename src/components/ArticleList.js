// import Article from "./Article";
// function ArticleList({posts}){
//     console.log(posts)
//     const articles = posts.map((post) => {
//         return <Article key={post.id} post={post}/>

//     })


//     return (
//         <main>
//             {articles}
//         </main>
//     )
// }
// export default ArticleList;




import Article from "./Article" // D3, S4.2: Import Article from Article.js

// D3, S1.1: Make an ArticleList component w/ starter code (returns <main> element)
function ArticleList({posts}){
    
    console.log(posts) // D3, S3: Destructure & pass the "posts" prop from App to ArticleList & log it to the console

    const articles = posts.map((post)=>{ 
        return <Article key={post.id} post={post}/> 
    }) // D3, S4.1: Map over the "posts" prop & return an Article component for each post that has a unique key assigned for ea.
    
    return(
        <main>
            {articles}
        </main> // D2, S4.3: Return all the articles by destructuring Articles variable, then go into Article comp & pass the "post" prop to it (accept the props)
    )
}
export default ArticleList 
// D3, S1.2: Starter code includes export/import statements
// Also, make Article component w/ starter code (returns <article> element)