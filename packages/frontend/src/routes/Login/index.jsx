import InputField from "../../components/InputFields.jsx";
import { form } from "../../form.module.css";
import { authSection } from "../../section.module.css";

export default function Login() {
  return (
    <section className={authSection}>
      <h1>log in</h1>
      <form
        action="http://localhost:3000/api/login"
        method="post"
        className={form}
      >
        <InputField label="username" />
        <InputField label="password" type="password" />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
