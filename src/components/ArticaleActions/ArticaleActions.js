import React from "react";
import Button from "../button/Button";

function ArticleActions() {
    return (
    <div className="article_button">
        <Button>Read</Button>
        <Button>Mark as read</Button>
        <Button>Mark as unread</Button>
    </div> 
    );
  }
  export default ArticleActions;