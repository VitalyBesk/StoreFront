import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import BaseButton from "../Base/BaseButton/BaseButton";
import BaseCounter from "../Base/BaseCounter/BaseCounter";
import actions from "../../store/actions";
import "./Product.scss";

function Product() {
  const { title } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productReducers.productList);
  const productCart = useSelector(state => state.cartReducers.productCart);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    let productIndex = productList.findIndex(el => el.title === title);

    if (productIndex !== -1) {
      setProduct(productList[productIndex]);
    } else {
      history.push("/");
    }
  }, [productList, title, history]);

  useEffect(() => {
    let productInCartIndex = productCart.findIndex(
      el => el.uuid === product.uuid
    );
    if (productInCartIndex !== -1) {
      setIsProductInCart(true);
    } else {
      setIsProductInCart(false);
    }
  }, [productCart, product.uuid]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const handleAddToCart = () => {
    if (!isProductInCart) {
      dispatch(
        actions.cartActions.addProduct({
          uuid: product.uuid,
          title: product.title,
          brand: product.brand,
          price: product.price,
          image: product.image,
          quantity: count
        })
      );
    } else {
      dispatch(actions.cartActions.incrementProduct(product.uuid, count));
    }
  };

  return (
    <div className="container product">
      <div className="row">
        <div className="col-xs-12 d-flex center-xs middle-xs product__breadcrumbs">
          <Link to="/" className="link link-primary">
            Home
          </Link>
          <Link to="/" className="link  link-primary">
            Plates
          </Link>
          <Link to={`/plates/${product.title}`} className="link  link-primary">
            {product.title}
          </Link>
        </div>
        <div className="col-xs-12 col-sm-7 d-flex middle-xs">
          <img
            src={`/media/${product.image}`}
            alt=""
            className="img-responsive"
          />
        </div>
        <div className="col-xs-12 col-sm-5 d-flex flex-column center-xs middle-xs">
          <div className="product__brand">{product.brand}</div>
          <h1 className="product__title">{product.title}</h1>
          <div className="product__price">${product.price}</div>
          <div className="product__descr">{product.description}</div>
          <div className="d-flex center-xs">
            <BaseCounter
              handleClickIncrement={increment}
              handleClickDecrement={decrement}
              value={count}
            />
            <BaseButton
              disabled={!count}
              handleClick={handleAddToCart}
              size="lg"
            >
              Add to cart
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
