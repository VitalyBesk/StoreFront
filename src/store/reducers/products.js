const productReducers = (
  state = { isLoading: true, isError: false, productList: [] },
  action
) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        productList: action.productList
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default productReducers;
