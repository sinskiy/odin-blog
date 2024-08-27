import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" aria-label="home" className={classes.logo}>
        blog
      </Link>
      <Nav />
    </header>
  );
};

const Nav = () => {
  const navigate = useNavigate();

  const { user, setToken } = useContext(UserContext);
  function logout() {
    setToken(null);
    navigate("/");
  }
  return (
    <nav className={classes.nav}>
      {user ? (
        <>
          <p>{user.username}</p>
          <button className="primary small" onClick={logout}>
            log out
          </button>
          {user.author && <Link to={`/authors/${user.author.id}`}>write</Link>}
        </>
      ) : (
        <>
          <Link to="/login">log in</Link>
          <Link to="/signup" className="link-button primary">
            sign up
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
