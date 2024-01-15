
// function Article({post}){
//     console.log(post)
//     return (
//         <article>
//             <h3>{post.title}</h3>
//             <small>
//                 {post.date}
//             </small>
//             <p>{post.preview}</p>
//         </article>
//     )
// }
// export default Article;


// D4, S1: Make an Article component w/ starter code (includes <article> element)
function Article({post}){
    
    console.log(post) // D4, S2: Destructure & pass the "post" prop from ArticleList to Article & log it to the console (after finishing ArticleList deliverables)
    
    console.log(post.title)
    console.log(post.date || "Jan 1, 1970")


    // Bonus, S1: Create a function that returns an emoji based on the number of minutes passed to it
    const { minutes } = post;
    function calculateReadingTimeIndicator(minutes) {
        let emoji = minutes < 30 ? "☕️ " : "🍱 ";
        let count = Math.ceil(minutes / (minutes < 30 ? 5 : 10));
        return `${emoji.repeat(count)} ${minutes} min read`;
    }
    let readingTimeIndicator = calculateReadingTimeIndicator(minutes);



    return ( // D4, S3.1: Create an <h3> element displaying title of the Article, passed as the prop "title"

    // D4, S3.2: Create a <small> element displaying the date of the Article, passed as the prop "date".
        // D4, S3.3: A default value of "Jan 1, 1970" should be used if no date is passed as prop 

    // D4, S3.4: Create a <p> element displaying the preview of the Article, passed as the prop "preview"
        <article> 
            <h3>{post.title}</h3>  
            <small>
                {post.date || "Jan 1, 1970"}
            </small>
            <p>{post.preview}</p>

            <p>{readingTimeIndicator}</p> 
            {/* Bonus, S2: Create another <p> displaying the reading time of the Article, passed as the prop "minutes" */}

        </article> 
    )
}
export default Article;