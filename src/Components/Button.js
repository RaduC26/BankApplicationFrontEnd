import React from "react";
import { Link } from "react-router-dom";

const Button = ({ displayName, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button>{displayName}</button>
    </Link>
  );
};

export default Button;
