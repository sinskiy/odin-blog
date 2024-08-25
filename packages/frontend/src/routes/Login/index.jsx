import { useEffect, useState } from "react";
import InputField from "../../components/InputFields.jsx";
import { form } from "../../form.module.css";
import { useFetch } from "../../hooks.jsx";
import { authSection } from "../../section.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signupAction = "http://localhost:3000/api/auth/login";
  const { data, error, loading, fire } = useFetch(
    signupAction,
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    },
    true
  );

  function handleSubmit(event) {
    event.preventDefault();

    fire();
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  }, [data]);

  return (
    <section className={authSection}>
      <h1>log in</h1>
      <p>{error?.message}</p>
      <form method="post" className={form} onSubmit={handleSubmit}>
        <InputField
          label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </section>
  );
}
