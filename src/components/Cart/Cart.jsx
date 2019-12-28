import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import BaseButton from "../Base/BaseButton/BaseButton";
import CartItem from "./CartItem/CartItem";
import CartOverview from "./CartOverview/CartOverview";
import "./Cart.scss";

function Cart({ isEmptyCart = true, totalPriceToFixed = "0" }) {
  const productCart = useSelector(state => state.cartReducers.productCart);

  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <h1 className="cart__title">Shopping Cart</h1>
          </div>
          <div className="col-md-8 col-md-offset-2 col-xs-12 cart__container">
            <div className="cart__inner d-flex flex-column between-xs h100">
              <div>
                <div className="row cart__header">
                  <div className="col-xs-7">Product</div>
                  <div className="hidden-xs col-xs-2">Quantity</div>
                  <div className="hidden-xs col-xs-1">Total</div>
                  <div className="hidden-xs col-xs-2 d-flex end-xs">Action</div>
                </div>
                {productCart.map(item => (
                  <CartItem key={item.uuid} product={item} />
                ))}
              </div>
              {isEmptyCart && (
                <div className="cart__empty text-center">Empty cart</div>
              )}

              <div className="cart__footer row middle-xs">
                {!isEmptyCart && (
                  <CartOverview totalPriceToFixed={totalPriceToFixed} />
                )}
                <div className="col-xs-12 d-flex between-xs top-xs">
                  <Link to="/" className="link link-primary">
                    Continue Shopping
                  </Link>
                  <BaseButton disabled size="lg">
                    Checkout (${totalPriceToFixed})
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  isEmptyCart: PropTypes.bool.isRequired,
  totalPriceToFixed: PropTypes.string.isRequired
};

export default Cart;
