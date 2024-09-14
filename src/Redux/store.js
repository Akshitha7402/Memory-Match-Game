import { createStore } from 'redux';
import cardReducer from '../Redux/Reducers';

const store = createStore(cardReducer);

export default store;
