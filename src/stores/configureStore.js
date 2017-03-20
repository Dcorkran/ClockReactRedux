import { createStore } from 'redux'
import app from '../reducers'

export default function configureStore() {
  let store = createStore(app)
  console.log(store);
  return store
}
