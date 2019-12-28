import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../../store/actions";
import PropTypes from "prop-types";
import BaseButton from "../../Base/BaseButton/BaseButton";
import "./CartPopupItem.scss";

function CartPopupItem({ product = {} }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () =>
    dispatch(actions.cartActions.deleteProduct(product.uuid));

  return (
    <div className="cart-popup-product row">
      <div className="col-xs-3">
        <img
          src={`/media/${product.image}`}
          alt=""
          className="cart-popup-product__img"
        />
      </div>
      <div className="col-xs-7">
        <div className="cart-popup-product__title">
          {product.title} <span>X {product.quantity}</span>
        </div>
        <div className="cart-popup-product__brand">{product.brand}</div>
        <div className="cart-popup-product__price">${product.price}</div>
      </div>
      <div className="col-xs-2">
        <BaseButton type="icon" handleClick={handleRemoveFromCart}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
            <path
              fill="var(--gray-color)"
              d="M612 36L576.5.6 306 270.6 35.5.6 0 36l270.5 270L0 576l35.5 35.4 270.5-270 270.5 270L612 576 341.5 306z"
            />
          </svg>
        </BaseButton>
      </div>
    </div>
  );
}

CartPopupItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default CartPopupItem;
