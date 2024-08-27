import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import UserPost from "../components/Post";

export default function Post() {
  const { postId } = useParams();
  const { data: post, isLoading, error, fire } = useFetch();
  useEffect(() => {
    fire(`/posts/${postId}`);
  }, []);

  if (isLoading) return <p>loading...</p>;
  if (error) return <h1>error: {error}</h1>;
  return (
    <section>
      <>
        {post ? (
          <UserPost post={post} preview={false} />
        ) : (
          <p>error: no post found</p>
        )}
      </>
    </section>
  );
}
