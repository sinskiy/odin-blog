import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Posts() {
  const { postId } = useParams();
  // TODO: error handling
  const { data: post, error, fire, isLoading } = useFetch();
  useEffect(() => {
    fire(`/${postId}`);
  }, []);

  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      <>{post ? <h1>{post.title}</h1> : <p>no post</p>}</>
    </section>
  );
}
