import React from "react";
import ArticleBody from "./ArticalBody/ArticalBody";
import ArticleActions from "./ArticaleActions/ArticaleActions";
import ArticleAuthor from "./ArticalAuthor/ArticalAuthor";


function Article() {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
        <ArticleBody/>
        <ArticleActions/>
        <ArticleAuthor/>
    </div> 
    );
  }
  export default Article;