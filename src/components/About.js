

// function About({image="https://via.placeholder.com/215", about}){
//     console.log(image)
//     console.log(about)

//     return (
//         <aside>
//             <img src={image} alt="blog logo"></img>
//             <p>{about}</p>
//         </aside>
//     )
// }

// export default About;





// D2, S1: Create an About component with starter code

function About({image="https://via.placeholder.com/215", about}){ // D2, S4.2: Set default placeholder value for image. 
    
    console.log(image) 
    console.log(about) // D2, S3: Destructure & pass both props (about, name) from App to About & log them to the console

    return ( // D2, S4.1: Render an <img> element w/ the src set it to given default prop value, & alt set to "blog logo". Also render <p> element w/ the about prop 
        <aside> 
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About // D2, S2.1: Export About from About.js & import it on App.js