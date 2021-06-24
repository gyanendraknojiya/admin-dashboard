import { CardContent, Card,CardMedia } from "@material-ui/core";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const ViewPost = ({ post }) => {
  console.log(post);
  return (
    <Card className=" my-3 px-md-5 px-2">
      <CardContent>
        <h3>{post.title}</h3>
       <div className="text-center">
       <img src={post.featuredImage} alt="Featured" className="rounded-lg " style={{width:"50%"}} /> 
       </div>
        <p className="mt-4" >{ReactHtmlParser(post.content)}</p>
      </CardContent>
    </Card>
  );
};

export default ViewPost;
