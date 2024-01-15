

// function Header({name}){
//     console.log(name)
//     return (
//         <header>
//             <h1>{name}</h1>
//         </header>
//     )
// }
// Export default Header; 


import React from "react"

function Header({ name }){ // D1, S1: Create a Header component under App.js that returns <header> w/ an h1 element inside (as starter code) 

    console.log(name) // D1, S4.1: Destructure & pass the "name" prop in the Header fn. Then log the "name" prop from App to the console 

    return (
        <header>
            <h1>{name}</h1> {/* D1, S4.2: Render the "name" prop from App in h1 element */}
        </header>
    )
}

export default Header; // D1, S2.1: Export Header from Header.js & import it on App.js