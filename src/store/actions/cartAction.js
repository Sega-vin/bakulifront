import { ADD_ITEM, CREATE_ORDER, DELETE_ITEM, GET_CART } from "../types"
import instanse from '../../instanse'


export const getCart = id => {
  return async dispatch => {
    await instanse.get(`v1/cart/detail/${id}/`) 
      .then(resp => {
        // console.log(resp.data)
        dispatch({ 
          type: GET_CART,
          payload: {
            cart_items: resp.data.cart_items,
            price: resp.data.final_price,
            total: resp.data.total_items,
          }
        })
      })
      .catch(err => { 
        console.log(err.response)
      })
  }
}

export const addItem = (data) => {
  return async dispatch => {
    await instanse.post(`v1/cartitem/create/`, data) 
      .then(resp => {
        console.log(resp.data)
        dispatch({ 
          type: ADD_ITEM,
          payload: resp.data
        })
        dispatch(getCart(data.cart))
      })
      .catch(err => { 
        console.log(err.response)
      })

  }
}

export const deleteItem = (id) => {
  return async dispatch => {
    await instanse.delete(`v1/cartitem/${id}/`) 
      .then(resp => {
        dispatch({ 
          type: DELETE_ITEM,
          payload: resp.data
        })
        // dispatch(getCart(data.cart))
      })
      .catch(err => { 
        console.log(err.response)
      })
  }
}

export const order = (data) => {
  return async dispatch => {
    await instanse.post(`v1/order/create/`, data) 
      .then(resp => {
        console.log(resp.data)
        dispatch({ 
          type: CREATE_ORDER,
          payload: resp.data
        })
      })
      .catch(err => { 
        console.log(err.response)
      })

  }
}