import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import PostPreview from "../components/Post";
import { useParams } from "react-router-dom";

export default function Posts() {
  // TODO: error handling
  const { authorId } = useParams();
  const { data: posts, fire, isLoading } = useFetch();
  const fireFunc = () => {
    if (authorId) return fire(`/authors/${authorId}`);
    return fire("/posts");
  };
  useEffect(() => {
    fireFunc();
  }, []);

  if (isLoading) return <p>loading...</p>;
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
          </>
        ) : (
          <h1>no posts</h1>
        )}
      </section>
    </>
  );
}
