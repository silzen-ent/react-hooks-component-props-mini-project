import React from "react";
import blogData from "../data/blog";
import Header from "./Header" // D1, S2.2: Import Header from Header.js
import About from "./About" // D2, S2.2: Import About from About.js
import ArticleList from "./ArticleList" // D3, S2.2: Import ArticleList 

import Article from "./Article" // D4, S2.1: Import Article from Article.js
console.log(blogData);


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} /> {/* D1, S3: Render the Header comp & pass the "name" prop from blogData to Header */}

      <About image={blogData.image} about={blogData.about}/> {/* D2, S2.3: Render the About comp & pass the "image" prop */}

      <ArticleList posts={blogData.posts}/> {/* D3, S2.3: Render the ArticleList comp & pass "posts" from blogData*/}

      

    </div>
  );
}

export default App;
