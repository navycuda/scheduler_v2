import React from "react";
import classNames from "classnames";

import "components/Button.scss";

const Button = ({ children, confirm, danger, disabled }) => {
  const cssClasses = classNames('button', {
    'button--confirm': confirm,
    'button--danger': danger,
  });

  return (
    <button
      className={cssClasses}
      disabled={disabled}
      >
      {children}
    </button>
  );
};

export default Button;