import React, { useMemo, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import BaseButton from "../Base/BaseButton/BaseButton";
import CartPopupItem from "./CartPopupItem/CartPopupItem";
import "./CartPopup.scss";

function CartPopup({ isEmptyCart = true, totalPriceToFixed = "0" }) {
  const history = useHistory();
  const productCart = useSelector(state => state.cartReducers.productCart);
  const [isOpen, setIsOpen] = useState(false);
  const curRef = useRef(null);

  const productCartLength = useMemo(() => {
    return productCart.length;
  }, [productCart]);

  const cartPopupClasses = useMemo(() => {
    return classNames({
      "cart-popup": true,
      active: isOpen
    });
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (!curRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const redirectToCartPage = () => {
    setIsOpen(false);
    history.push("/cart");
  };

  const handleTogglePopup = () => setIsOpen(true);

  return (
    <div className="cart-popup-container" ref={curRef}>
      <div className="link link-primary" onClick={handleTogglePopup}>
        my cart {!isEmptyCart && <span>({productCartLength})</span>}
      </div>
      <div className={cartPopupClasses}>
        {isEmptyCart && (
          <div className="cart-popup__empty text-center">Empty cart</div>
        )}
        {productCart.map(item => (
          <CartPopupItem key={item.uuid} product={item} />
        ))}
        <div className="cart-popup__footer row">
          {!isEmptyCart && (
            <div className="col-xs-12 between-xs d-flex cart-popup__total">
              <div>total</div>
              <div>${totalPriceToFixed}</div>
            </div>
          )}
          <div className="col-xs-12 d-flex between-xs cart-popup__btns">
            <BaseButton handleClick={redirectToCartPage} type="secondary">
              View Cart
            </BaseButton>
            <BaseButton>Checkout</BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}

CartPopup.propTypes = {
  isEmptyCart: PropTypes.bool.isRequired,
  totalPriceToFixed: PropTypes.string.isRequired
};

export default CartPopup;
