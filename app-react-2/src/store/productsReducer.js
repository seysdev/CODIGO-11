const initialState = {
  productsToBuy: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS_TO_BUY':
      return { ...state, productsToBuy: action.payload };
    default:
      return state;
  }
}

export { productsReducer };
