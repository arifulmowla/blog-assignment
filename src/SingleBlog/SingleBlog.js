import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import Comments from "../Comments/Comments";

const SingleBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);

  const { id, title, body } = blog;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + blogId)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <div className="blog">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <Comments blogId={blogId}></Comments>
    </Container>
  );
};

export default SingleBlog;
