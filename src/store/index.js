import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { recipeReducer } from './reducers/recipeReducer'
import { userReducer } from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
 recipe: recipeReducer,
 user: userReducer,
 cart: cartReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))