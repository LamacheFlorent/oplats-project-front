import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers/index';
import recipesMiddleware from '../middleware/recipesMiddleware';
import authMiddleware from '../middleware/userMiddleware';

const enhancers = composeWithDevTools(
    applyMiddleware(
      recipesMiddleware,
      authMiddleware
    )
  );

const store = createStore(
  rootReducer,
  enhancers
);

export default store;