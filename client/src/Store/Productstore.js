// Productstore.js
import { createStore } from 'redux';
import productReducer from '../Reducer/ProductReducer';

const Productstore = createStore(productReducer);

export default Productstore;
