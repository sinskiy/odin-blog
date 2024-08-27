import { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { jsonOptions } from "../const";
import UserContext from "../context/UserContext";

const Edit = () => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const { user, token } = useContext(UserContext);

  const { data: post, fire, error, isLoading } = useFetch();
  useEffect(() => {
    if (postId) {
      fire(`/posts/${postId}`);
    }
  }, []);

  const method = postId ? "put" : "post";
  const { data: newPost, error: newError, fire: fireUpdate } = useFetch(method);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fireUpdate(postId ? `/posts/${postId}` : "/posts", {
      headers: {
        ...jsonOptions(method).headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        authorId: user.author.id,
        title: formData.get("title"),
        description: formData.get("description"),
        text: formData.get("text"),
        public: postId ? post.public : false,
      }),
    });
  }

  useEffect(() => {
    if (newPost) {
      navigate(`/authors/${user.author.id}`);
    }
  }, [newPost]);

  if (isLoading) return <p>loading...</p>;
  if (error) return <h1>error: {error}</h1>;
  return (
    <section>
      <h1>
        {post ? "edit" : "new"} {post ? post.title : "post"}
      </h1>
      {newError && <h2>{newError}</h2>}
      <Form method="post" onSubmit={handleSubmit}>
        <InputField
          label="title"
          defaultValue={post?.title ?? ""}
          required
          minLength={1}
          maxLength={30}
        />
        <InputField
          label="description"
          defaultValue={post?.description ?? ""}
          required
          minLength={1}
          maxLength={255}
        />
        <InputField
          textarea={true}
          label="text"
          defaultValue={post?.text ?? ""}
          required
          minLength={1}
        />
      </Form>
    </section>
  );
};

export default Edit;
