const fetchInit = () => {
  return {
    type: "FETCH_INIT"
  };
};

const fetchSuccess = productList => {
  return {
    type: "FETCH_SUCCESS",
    productList
  };
};

const fetchFailure = () => {
  return {
    type: "FETCH_FAILURE"
  };
};

export default {
  fetchInit,
  fetchSuccess,
  fetchFailure
};
