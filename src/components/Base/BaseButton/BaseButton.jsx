import React, { useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./BaseButton.scss";

function BaseButton({
  size = "md",
  type = "primary",
  disabled = false,
  handleClick = () => {},
  children
}) {
  const classes = useMemo(() => {
    return classNames({
      "base-button": true,
      md: size === "md",
      lg: size === "lg",
      primary: type === "primary",
      secondary: type === "secondary",
      icon: type === "icon"
    });
  }, [size, type]);

  return (
    <button className={classes} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}

BaseButton.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node
};

export default BaseButton;
