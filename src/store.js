import {createStore} from 'redux'
import countReducer from './counter/reducer'
let store = createStore(countReducer);

export default store