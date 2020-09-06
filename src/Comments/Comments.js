import React, { useEffect, useState } from "react";
import "./comments.css";

const Comments = (props) => {
  const { blogId } = props;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + blogId)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="comment">
      <h4>Comments</h4>
      <hr></hr>

      {comments.map((comment) => (
        <div className="comments" key={comment.id}>
          <div>
            <img
              className="avater"
              src="https://image.flaticon.com/icons/svg/892/892781.svg"
              alt=""
            />
          </div>
          <div className="comment-body">
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
