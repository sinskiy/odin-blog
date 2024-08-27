import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import PostPreview from "../components/Post";
import { Link, useParams } from "react-router-dom";

export default function Posts() {
  const { authorId } = useParams();
  const { data: posts, isLoading, error, fire } = useFetch();
  const fireFunc = () => {
    if (authorId) return fire(`/authors/${authorId}`);
    return fire("/posts");
  };
  useEffect(() => {
    fireFunc();
  }, []);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>error: {error}</h1>;
  return (
    <>
      <section>
        {posts?.length > 0 ? (
          <>
            <h1>{authorId ? "your " : ""}posts</h1>
            {posts.map((post) => (
              <PostPreview
                key={post.id}
                post={post}
                firePosts={fireFunc}
                showPublish={authorId !== undefined}
              />
            ))}
            <div style={{ marginTop: "1rem" }}>
              {authorId && <Link to="/new">New post</Link>}
            </div>
          </>
        ) : (
          <h1>no posts</h1>
        )}
      </section>
    </>
  );
}
