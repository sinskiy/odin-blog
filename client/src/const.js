import { number, shape, string } from "prop-types";

// ? add Authorize?
export const jsonOptions = (method) => {
  return {
    method: method,
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  };
};

export const postType = shape({
  id: number.isRequired,
  title: string.isRequired,
  created_at: string.isRequired,
});
