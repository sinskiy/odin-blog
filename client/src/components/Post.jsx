import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import { bool, number, shape, string } from "prop-types";
import Comments from "./Comments";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Post = ({ post, preview = true }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <article className={classes.post}>
        <h2 className={classes.title}>{post.title}</h2>
        <p className={classes.date}>
          <time dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleDateString()}
          </time>
        </p>
        {post.description && <p>{post.description}</p>}
        {!preview && <div className="text">{post.text}</div>}
        {preview && (
          <Link to={`${post.id}`} aria-label="read" className={classes.link} />
        )}
      </article>
      {!preview && user && <Comments postId={post.id} />}
    </>
  );
};

Post.propTypes = {
  post: shape({
    id: number.isRequired,
    title: string.isRequired,
    created_at: string.isRequired,
  }),
  preview: bool,
};

export default Post;
