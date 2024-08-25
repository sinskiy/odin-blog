import { header, logo, nav } from "./Header.module.css";

export default function Header() {
  return (
    <header className={header}>
      <a href="/" className={logo} aria-label="home">
        blog
      </a>
      <nav className={nav}>
        <a href="/login">log in</a>
        <form action="/signup" method="get">
          <button>sign up</button>
        </form>
      </nav>
    </header>
  );
}
