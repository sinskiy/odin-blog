import InputField from "../../components/InputFields.jsx";
import { form } from "../../form.module.css";
import { authSection } from "../../section.module.css";
import { useFetch } from "../../hooks.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const signupAction = "http://localhost:3000/api/auth/signup";
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
    const newFormErrors = [];

    if (username.length < 1 || username.length > 30) {
      newFormErrors.push("Username must be between 1 and 30 characters.");
    }
    if (password.length < 1 || password.length > 255) {
      newFormErrors.push("Password must be between 1 and 255 characters.");
    }
    setFormErrors(newFormErrors);
    if (newFormErrors.length > 0) return;

    fire();
  }
  useEffect(() => {
    if (data && !error) {
      navigate("/login");
    }
    if (error) {
      setFormErrors([...formErrors, error.message]);
    }
  }, [data, error]);

  return (
    <section className={authSection}>
      <h1>sign up</h1>
      <ul>
        {formErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form method="post" onSubmit={handleSubmit} className={form}>
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
