import React from "react";
import PropTypes from "prop-types";
import "./BaseCounter.scss";

function BaseCounter({
  handleClickIncrement = () => {},
  handleClickDecrement = () => {},
  value = 0
}) {
  return (
    <div className="base-counter d-flex between-xs center-xs">
      <div className="base-counter__value d-flex  center-xs middle-xs">
        {value}
      </div>
      <div className="d-flex flex-column between-xs">
        <button onClick={handleClickIncrement} className="base-counter__btn">
          +
        </button>
        <button
          onClick={handleClickDecrement}
          disabled={!value}
          className="base-counter__btn"
        >
          -
        </button>
      </div>
    </div>
  );
}

BaseCounter.propTypes = {
  handleClickIncrement: PropTypes.func.isRequired,
  handleClickDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default BaseCounter;
