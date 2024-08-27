import { shape, string } from "prop-types";

const Comment = ({ comment }) => {
  console.log(comment);
  return <div>{comment.text}</div>;
};
Comment.propTypes = {
  comment: shape({
    text: string.isRequired,
    created_at: string.isRequired,
  }),
};

export default Comment;
