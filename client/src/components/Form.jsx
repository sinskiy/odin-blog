import { bool, node } from "prop-types";
import classes from "./Form.module.css";

const Form = ({ children, isLoading = false, compact = false, ...props }) => {
  return (
    <form className={classes.form} {...props}>
      <section className={classes.formMain}>{children}</section>
      <FormNav isLoading={isLoading} compact={compact} />
    </form>
  );
};
Form.propTypes = {
  children: node,
  isLoading: bool,
  compact: bool,
};

const FormNav = ({ isLoading, compact }) => {
  return (
    <section className={classes.formNav}>
      <button
        type="submit"
        className={`primary ${compact ? "small" : ""}`}
        disabled={isLoading}
      >
        submit
      </button>
      {!compact && (
        <button type="reset" className="error" disabled={isLoading}>
          reset
        </button>
      )}
    </section>
  );
};
FormNav.propTypes = {
  isLoading: bool,
  compact: bool,
};

export default Form;
