import { createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
  // let store = createStore(rootReducer)
  // console.log(store);
  // return store
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
