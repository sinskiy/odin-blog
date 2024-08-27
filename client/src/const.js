// ? add Authorize?
export const jsonOptions = (method) => {
  return {
    method: method,
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  };
};
