import React from "react";
import classNames from "classnames";

import "components/Button.scss";

/**
 * Reusable Button for components
 * @param     {object}    props
 * @param     {Array}     children - React Components
 * @param     {Boolean}   confirm - Sets button type to confirm
 * @param     {Boolean}   danger - Sets button type to danger
 * @param     {Boolean}   disabled - Sets button type to danger
 * @param     {Function}  onClick - onClick!
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