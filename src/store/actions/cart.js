const addProduct = product => {
  return {
    type: "ADD_PRODUCT",
    product
  };
};

const incrementProduct = (uuid, count = 0) => {
  return {
    type: "INCREMENT_PRODUCT",
    uuid,
    count
  };
};

const decrementProduct = uuid => {
  return {
    type: "DECREMENT_PRODUCT",
    uuid
  };
};

const deleteProduct = uuid => {
  return {
    type: "DELETE_PRODUCT",
    uuid
  };
};

export default {
  addProduct,
  incrementProduct,
  decrementProduct,
  deleteProduct
};
