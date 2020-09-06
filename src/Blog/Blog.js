import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./blog.css";

const Blog = (props) => {
  const { id, title, body } = props.blog;
  return (
    <>
      <div className="blog">
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to={"/blog/" + id}>
          <Button variant="outlined" color="primary" className="see-more">
            Read
          </Button>
        </Link>
      </div>
      <hr></hr>
    </>
  );
};

export default Blog;
