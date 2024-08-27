import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import UserPost from "../components/Post";

export default function Post() {
  const { postId } = useParams();
  // TODO: error handling
  const { data: post, fire, isLoading } = useFetch();
  useEffect(() => {
    fire(`/posts/${postId}`);
  }, []);

  if (isLoading) return <p>loading...</p>;
  // TODO: better 404 handling
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
