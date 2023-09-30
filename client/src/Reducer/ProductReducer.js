// ProductReducer.js
const initialState = {
    item: {
      name: '',
      quantity: '',
    },
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_ITEM':
        return {
          ...state,
          item: {
            ...state.item,
            ...action.payload,
          },
        };
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  