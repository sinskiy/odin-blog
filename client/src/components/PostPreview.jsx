import classes from "./Post.module.css";
import { shape, string } from "prop-types";

const PostPreview = ({ post }) => {
  return (
    <article className={classes.post}>
      <cite className={classes.author}>{post.author.user.username}</cite>
      <h2 className={classes.title}>{post.title}</h2>
      <p className={classes.date}>
        <time dateTime={post.created_at}>
          {new Date(post.created_at).toLocaleString()}
        </time>
      </p>
      {post.description && <p>{post.description}</p>}
      <a href={`${post.id}`} aria-label="read" className={classes.link}></a>
    </article>
  );
};

const user = shape({
  username: string,
});

// const comment = shape({
//   id: number,
//   text: string,
//   created_at: instanceOf(Date),
//   user: user,
// });

PostPreview.propTypes = {
  post: shape({
    title: string.isRequired,
    description: string,
    created_at: string.isRequired,
    // comments: arrayOf(comment),
    author: shape({
      user: user,
    }),
  }),
};

export default PostPreview;
