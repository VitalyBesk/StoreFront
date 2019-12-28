import React from "react";
import PropTypes from "prop-types";
import "./CartOverview.scss";

function CartOverview({ totalPriceToFixed = "0" }) {
  return (
    <div className="col-xs-12 cart-overview">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-6">
          <div className="cart-overview__row">Cart overview</div>
          <div className="d-flex between-xs cart-overview__row">
            <div>Subtotal</div>
            <div>${totalPriceToFixed}</div>
          </div>
          <div className="d-flex between-xs cart-overview__row">
            <div>Total</div>
            <div className="cart-overview__price">${totalPriceToFixed} CAD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartOverview.propTypes = {
  totalPriceToFixed: PropTypes.string
};

export default CartOverview;
