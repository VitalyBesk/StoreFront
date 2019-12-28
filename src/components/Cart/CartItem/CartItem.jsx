import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import actions from "../../../store/actions";
import BaseButton from "../../Base/BaseButton/BaseButton";
import BaseCounter from "../../Base/BaseCounter/BaseCounter";
import "./CartItem.scss";

function CartItem({ product = {} }) {
  const dispatch = useDispatch();
  const increment = () =>
    dispatch(actions.cartActions.incrementProduct(product.uuid));
  const decrement = () =>
    dispatch(actions.cartActions.decrementProduct(product.uuid));
  const handleRemoveFromCart = () =>
    dispatch(actions.cartActions.deleteProduct(product.uuid));

  return (
    <div className="cart-product row">
      <div className="col-xs-12  col-sm-7 d-flex">
        <div className="row">
          <div className="col-xs-5 col-sm-4">
            <img
              src={`/media/${product.image}`}
              alt=""
              className="cart-product__img"
            />
          </div>
          <div className="col-xs-7 col-sm-8">
            <div className="cart-product__brand">{product.brand}</div>
            <div className="cart-product__title">{product.title}</div>
          </div>
        </div>
      </div>
      <div className="col-xs-5 col-sm-2">
        <BaseCounter
          handleClickIncrement={increment}
          handleClickDecrement={decrement}
          value={product.quantity}
        />
      </div>
      <div className="col-xs-3 col-sm-1 cart-product__price">
        ${product.price}
      </div>
      <div className="col-xs-4 col-sm-2 d-flex end-xs">
        <BaseButton type="icon" size="lg" handleClick={handleRemoveFromCart}>
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

CartItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default CartItem;
