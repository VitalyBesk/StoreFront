const cartReducers = (state = { productCart: [], totalPrice: 0 }, action) => {
  let indexOfEl = state.productCart.findIndex(el => el.uuid === action.uuid);
  let productCart = [...state.productCart];

  const computeTotalPrice = arr =>
    arr.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  switch (action.type) {
    case "ADD_PRODUCT":
      productCart.push(action.product);
      return {
        ...state,
        productCart,
        totalPrice: computeTotalPrice(productCart)
      };
    case "INCREMENT_PRODUCT":
      if (indexOfEl !== -1) {
        productCart[indexOfEl] = {
          ...productCart[indexOfEl],
          quantity:
            action.count > productCart[indexOfEl].quantity
              ? action.count
              : productCart[indexOfEl].quantity + 1
        };
      }
      return {
        ...state,
        productCart,
        totalPrice: computeTotalPrice(productCart)
      };
    case "DECREMENT_PRODUCT":
      if (indexOfEl !== -1) {
        productCart[indexOfEl] = {
          ...productCart[indexOfEl],
          quantity: productCart[indexOfEl].quantity - 1
        };
      }
      return {
        ...state,
        productCart,
        totalPrice: computeTotalPrice(productCart)
      };
    case "DELETE_PRODUCT":
      let filteredProductCart = productCart.filter(
        el => el.uuid !== action.uuid
      );
      return {
        ...state,
        productCart: filteredProductCart,
        totalPrice: computeTotalPrice(filteredProductCart)
      };

    default:
      return state;
  }
};

export default cartReducers;
