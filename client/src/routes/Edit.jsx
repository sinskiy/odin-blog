import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import InputField from "../components/InputField";

const Edit = () => {
  const { postId } = useParams();
  // TODO: error handling
  const { data: post, fire, isLoading } = useFetch();
  useEffect(() => {
    fire(`/posts/${postId}`);
  }, []);

  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      <h1>edit {post ? post.title : "post"}</h1>
      {post && (
        <Form method="post">
          <InputField label="title" defaultValue={post.title} />
          <InputField
            label="description"
            defaultValue={post.description ?? ""}
          />
          <InputField textarea={true} label="text" defaultValue={post.text} />
        </Form>
      )}
    </section>
  );
};

export default Edit;
