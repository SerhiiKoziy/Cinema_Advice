import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { dataReducer, profileReducer } from '../reducers';
import { InitialState } from '../constants/InitialState';

const reducer = combineReducers({
  data: dataReducer,
  profile: profileReducer,
});

export default function configureStore( InitialState) {

  //const logger = createLogger();
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducer, InitialState, compose(
    middleware,
  ));
  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //       return store.replaceReducer(require('../reducers'));
  //     }
  //   );
  // }

  return { store };
}
