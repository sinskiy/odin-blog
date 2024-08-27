import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import { bool, func } from "prop-types";
import Comments from "./Comments";
import useFetch from "../hooks/useFetch";
import { jsonOptions, postType } from "../const";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const Post = ({ post, firePosts, preview = true, showPublish }) => {
  const { token } = useContext(UserContext);

  // TODO: handle error and loading
  const { data, fire } = useFetch("put");
  function handlePublishClick() {
    fire(`/posts/${post.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonOptions("put").headers,
      },
      body: JSON.stringify({ ...post, postPublic: !post.public }),
    });
  }

  useEffect(() => {
    if (data) {
      firePosts();
    }
  }, [data]);

  return (
    <>
      <article className={classes.post}>
        <h2 className={classes.title}>{post.title}</h2>
        <p className={classes.date}>
          <time dateTime={post.created_at}>
            {new Date(post.created_at).toLocaleDateString()}
          </time>
        </p>
        {post.description && (
          <p className={classes.description}>{post.description}</p>
        )}
        {!preview && <div className="text">{post.text}</div>}
        {showPublish && (
          <button
            className="primary"
            style={{ zIndex: 1 }}
            onClick={handlePublishClick}
          >
            {post.public ? "unpublish" : "publish"}
          </button>
        )}
        {preview && (
          <Link
            to={showPublish ? `/${post.id}/edit` : `/${post.id}`}
            aria-label="read"
            className={classes.link}
          />
        )}
      </article>
      {!preview && <Comments postId={post.id} />}
    </>
  );
};
Post.propTypes = {
  post: postType,
  firePosts: func,
  preview: bool,
  showPublish: bool,
};

export default Post;
