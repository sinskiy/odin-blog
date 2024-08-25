import { string } from "prop-types";
import { inputField, inputLabel, input } from "./index.module.css";

const InputField = ({ label, ...inputProps }) => {
  return (
    <div className={inputField}>
      <label htmlFor={label} className={inputLabel}>
        {label}
      </label>
      <input {...inputProps} name={label} id={label} className={input} />
    </div>
  );
};
InputField.propTypes = {
  label: string,
};
export default InputField;
