import { ADD_ITEM, CREATE_ORDER, DELETE_ITEM, GET_CART, GET_STORE } from "../types"

const initialState = {
  cart_items: [],
  id: 1,
  price: 0,
  total_items: 0,
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: return {
      ...state,
      cart_items: action.payload.cart_items,
      price: action.payload.price,
      total_items: action.payload.total
    }
    case ADD_ITEM: return {
      ...state
    }
    case DELETE_ITEM: return {
      ...state
    }
    case CREATE_ORDER: return {
      ...state
    }
    default: return state
  }
  return state
}