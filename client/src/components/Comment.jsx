import classes from "./Comment.module.css";
import { shape, string } from "prop-types";

const Comment = ({ comment }) => {
  return (
    <div className={classes.comment}>
      <p className={classes.username}>{comment.user.username}</p>
      <p className={classes.date}>
        <time dateTime={comment.created_at}>
          {new Date(comment.created_at).toLocaleDateString()}
        </time>
      </p>
      <div className="text">{comment.text}</div>
    </div>
  );
};
Comment.propTypes = {
  comment: shape({
    text: string.isRequired,
    created_at: string.isRequired,
  }),
};

export default Comment;
