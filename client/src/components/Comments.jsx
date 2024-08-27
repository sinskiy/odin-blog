import { number } from "prop-types";
import classes from "./Comments.module.css";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = ({ postId }) => {
  // TODO: error handling
  const { data: comments, fire } = useFetch();

  const commentsUrl = `/posts/${postId}/comments`;
  useEffect(() => {
    fire(commentsUrl);
  }, []);
  return (
    <section className={classes.commentsContainer}>
      <h3>comments</h3>
      <NewComment postId={postId} fireComments={() => fire(commentsUrl)} />
      {comments?.length ? (
        <ul role="list" className={classes.comments}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "1rem" }}>no comments yet. be first!</p>
      )}
    </section>
  );
};
Comments.propTypes = {
  postId: number,
};

export default Comments;
