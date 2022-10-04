import React from "react";

import "components/Button.scss";

const Button = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;