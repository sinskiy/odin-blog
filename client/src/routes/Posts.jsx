import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Posts() {
  // TODO: error handling
  const { data: posts, error, fire, isLoading } = useFetch();
  useEffect(() => {
    fire("/posts");
  }, []);

  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      <>
        {posts?.length ? (
          posts.map((post) => <h1 key={post.id}>{post.title}</h1>)
        ) : (
          <p>no posts</p>
        )}
      </>
    </section>
  );
}
