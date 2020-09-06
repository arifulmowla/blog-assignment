import React, { useEffect, useState } from "react";
import "./blogs.css";
import Blog from "../Blog/Blog";
import { Container } from "@material-ui/core";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <br />
      <h1 className="text-center">Our Recent Posts</h1>

      <Container maxWidth="lg">
        <div className="flex">
          {blogs.map((item) => (
            <Blog blog={item} key={item.id}></Blog>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
