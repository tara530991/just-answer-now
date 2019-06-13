import React from "react";

const Button = ({ children, ...btnProps }) => {
  return <button {...btnProps}>{children}</button>;
};

export default Button;
