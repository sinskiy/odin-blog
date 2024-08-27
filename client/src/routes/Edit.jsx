import { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { jsonOptions } from "../const";
import UserContext from "../context/UserContext";

const Edit = () => {
  const { postId } = useParams();

  const { token } = useContext(UserContext);

  // TODO: error handling
  const { data: post, fire, isLoading } = useFetch();
  useEffect(() => {
    fire(`/posts/${postId}`);
  }, []);

  // TODO: error handling
  const { fire: fireUpdate } = useFetch("put");
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fireUpdate(`/posts/${postId}`, {
      headers: {
        ...jsonOptions("put").headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: formData.get("title"),
        description: formData.get("description"),
        text: formData.get("text"),
        public: post.public,
      }),
    });
  }

  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      <h1>edit {post ? post.title : "post"}</h1>
      {post && (
        <Form method="post" onSubmit={handleSubmit}>
          <InputField
            label="title"
            defaultValue={post.title}
            required
            minLength={1}
            maxLength={30}
          />
          <InputField
            label="description"
            defaultValue={post.description ?? ""}
            required
            minLength={1}
            maxLength={255}
          />
          <InputField
            textarea={true}
            label="text"
            defaultValue={post.text}
            required
            minLength={1}
          />
        </Form>
      )}
    </section>
  );
};

export default Edit;
