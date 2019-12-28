import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import actions from "../../../store/actions";
import BaseButton from "../../Base/BaseButton/BaseButton";
import "./CategoryProduct.scss";

function CategoryProduct({ product = {} }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const productCart = useSelector(state => state.cartReducers.productCart);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    let productInCartIndex = productCart.findIndex(
      el => el.uuid === product.uuid
    );
    if (productInCartIndex !== -1) {
      setIsProductInCart(true);
    }
  }, [product.uuid, productCart]);

  const handleAddToCart = () => {
    if (!isProductInCart) {
      dispatch(
        actions.cartActions.addProduct({
          uuid: product.uuid,
          title: product.title,
          brand: product.brand,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      );
    } else {
      dispatch(actions.cartActions.incrementProduct(product.uuid));
    }
  };

  const redirectToProductPage = () => history.push(`plates/${product.title}`);

  return (
    <li className="category-product col-xs-6 col-sm-4 text-center">
      <div className="category-product__img-wrap">
        <img src={`/media/${product.image}`} alt="" />
        <div className="category-product__img-btns d-flex flex-column center-xs middle-xs">
          <BaseButton handleClick={redirectToProductPage}>
            View Details
          </BaseButton>
          <BaseButton handleClick={handleAddToCart}>Add to Cart</BaseButton>
        </div>
      </div>
      <div className="category-product__brand">{product.brand}</div>
      <div className="category-product__title">{product.title}</div>
      <div className="category-product__price">${product.price}</div>
    </li>
  );
}

CategoryProduct.propTypes = {
  product: PropTypes.object.isRequired
};

export default CategoryProduct;
