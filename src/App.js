import React, { useEffect, useMemo } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "./store/actions";
import uuid from "./helpers/uuid";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import CartPopup from "./components/CartPopup/CartPopup";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.productReducers.isLoading);
  const productCart = useSelector(state => state.cartReducers.productCart);
  const totalPrice = useSelector(state => state.cartReducers.totalPrice);

  const isEmptyCart = useMemo(() => {
    return productCart.length === 0;
  }, [productCart]);

  const totalPriceToFixed = useMemo(() => {
    return totalPrice.toFixed(2);
  }, [totalPrice]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(actions.productActions.fetchInit());

      try {
        let response = await fetch("/products.json");
        let parsedData = await response.json();
        parsedData.forEach(el => {
          el.uuid = uuid();
          el.price = el.price.toFixed(2);
        });
        dispatch(actions.productActions.fetchSuccess(parsedData));
      } catch (e) {
        console.log(e);
        dispatch(actions.productActions.fetchFailure());
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="app">
      <header className="header">
        <div className="container h100">
          <div className="row h100">
            <div className="col-xs-6  d-flex middle-xs">
              <Link to="/" className="header__logo">
                <img src="/media/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-xs-6 d-flex middle-xs end-xs">
              <CartPopup
                isEmptyCart={isEmptyCart}
                totalPriceToFixed={totalPriceToFixed}
              />
            </div>
          </div>
        </div>
      </header>
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <Switch>
          <Route exact path="/" component={Category} />
          <Route
            path="/cart"
            render={props => (
              <Cart
                isEmptyCart={isEmptyCart}
                totalPriceToFixed={totalPriceToFixed}
              />
            )}
          />
          <Route path="/plates/:title" component={Product} />
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </div>
  );
}

export default App;
