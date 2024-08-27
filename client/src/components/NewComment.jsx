import { func, number } from "prop-types";
import Form from "./Form";
import InputField from "./InputField";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { postOptions } from "../const";

const NewComment = ({ postId, fireComments }) => {
  const { user, token } = useContext(UserContext);
  const { data, fire } = useFetch("post");
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fire(`/posts/${postId}/comments`, {
      headers: {
        Authorization: `Bearer ${token}`,
        ...postOptions.headers,
      },
      body: JSON.stringify({
        text: formData.get("text"),
        userId: user.id,
      }),
    });
  }

  useEffect(() => {
    if (data) {
      fireComments();
    }
  }, [data]);

  return (
    <Form method="post" onSubmit={handleSubmit} compact={true}>
      <InputField label="text" required minLength={1} maxLength={255} />
    </Form>
  );
};
NewComment.propTypes = {
  postId: number,
  fireComments: func,
};

export default NewComment;
