import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import PostPreview from "../components/Post";
import { useParams } from "react-router-dom";

export default function Posts() {
  // TODO: error handling
  const { authorId } = useParams();
  const { data: posts, fire, isLoading } = useFetch();
  useEffect(() => {
    authorId ? fire(`/authors/${authorId}`) : fire("/posts");
  }, []);

  if (isLoading) return <p>loading...</p>;
  return (
    <>
      <section>
        {posts?.length > 0 ? (
          <>
            <h1>{authorId ? "your " : ""}posts</h1>
            {posts.map((post) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </>
        ) : (
          <h1>no posts</h1>
        )}
      </section>
    </>
  );
}
