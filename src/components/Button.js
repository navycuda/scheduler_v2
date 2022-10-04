import React from "react";
import classNames from "classnames";

import "components/Button.scss";

const Button = ({ children, confirm, danger, disabled, onClick }) => {
  const cssClasses = classNames('button', {
    'button--confirm': confirm,
    'button--danger': danger,
  });

  return (
    <button
      className={cssClasses}
      disabled={disabled}
      onClick={onClick}
      >
      {children}
    </button>
  );
};

export default Button;