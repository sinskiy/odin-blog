import { number } from "prop-types";
import classes from "./Comments.module.css";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Comment from "./Comment";

const Comments = ({ postId }) => {
  // TODO: error handling
  const { data: comments, fire } = useFetch();
  useEffect(() => {
    fire(`/posts/${postId}/comments`);
  }, []);
  console.log(comments);
  return (
    <section className={classes.comments}>
      <h3>comments</h3>
      {comments?.length ? (
        <ul role="list">
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <p>no comments yet. be first!</p>
      )}
    </section>
  );
};
Comments.propTypes = {
  postId: number,
};

export default Comments;
