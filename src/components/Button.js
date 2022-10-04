import React from "react";
import classNames from "classnames";

import "components/Button.scss";

/**
 * 
 * @param {object} props
 * @property {Array} children - React Components
 * @property {Boolean} confirm - Sets button type to confirm
 * @property {Boolean} danger - Sets button type to danger
 * @property {Boolean} disabled - Sets button type to danger
 * @property {Function} onClick - onClick!
 * @returns React Component
 */
const Button = ({
    children,
    confirm,
    danger,
    disabled,
    onClick
  }) => {
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