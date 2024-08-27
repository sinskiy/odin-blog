const Comment = ({ comment }) => {
  console.log(comment);
  return <div>{comment.text}</div>;
};

export default Comment;
