import { Link } from "react-router-dom";
import { header, logo, nav } from "./Header.module.css";

export default function Header() {
  return (
    <header className={header}>
      <Link to="/" className={logo} aria-label="home">
        blog
      </Link>
      <nav className={nav}>
        <Link to="/login">log in</Link>
        <Link to="/signup" className="link-button">
          sign up
        </Link>
      </nav>
    </header>
  );
}
