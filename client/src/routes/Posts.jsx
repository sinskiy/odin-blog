import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import PostPreview from "../components/PostPreview";

export default function Posts() {
  // TODO: error handling
  const { data: posts, fire, isLoading } = useFetch();
  useEffect(() => {
    fire("/posts");
  }, []);

  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      <>
        {posts?.length ? (
          posts.map((post) => <PostPreview key={post.id} post={post} />)
        ) : (
          <p>no posts</p>
        )}
      </>
    </section>
  );
}
