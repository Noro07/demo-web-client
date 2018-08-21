import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { landing } from 'landing-web';

const storeFactory = () => applyMiddleware(thunk)(createStore)(
  combineReducers(
    Object.assign(landing)
  )
);

export default storeFactory;
