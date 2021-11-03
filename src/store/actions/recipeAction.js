import { GET_CART, LOAD_RECIPE, DELETE_RECIPE, ADD_RECIPE, LOAD_RECIPEID, LOAD_ADDITIONAL, GET_STORE} from "../types"
import instanse from '../../instanse'

export const getStore = () => {
  return async dispatch => {
    await instanse.get(`v1/store/`) 
      .then(resp => {
        dispatch({ 
          type: GET_STORE,
          payload: resp.data.results
        })
      })
      .catch(err => { 
        console.log(err.response)
      })
  }
}

export const loadRecipe = () => {
  return async dispatch => {
    const respone = await instanse.get(`v1/menu/`)
      .then(resp => {
        dispatch({ 
          type: LOAD_RECIPE,
          payload: resp.data.results
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const loadRecipeId = id => {
  return async dispatch => {
    await instanse.get(`v1/item/${id}/`) 
      .then(resp => {
        // console.log(resp.data)
        dispatch({ 
          type: LOAD_RECIPEID,
          payload: resp.data
        })
      })
      .catch(err => { 
        console.log(err.response)
      })
  }
}

export const additional = id => {
  return async dispatch => {
    const respone = await instanse.get(`v1/items-additional/${id}/`) 
      .then(resp => {
        dispatch({ 
          type: LOAD_ADDITIONAL,
          payload: resp.data
        })
      })
      .catch(err => { 
        console.log(err.response)
      })
  }
}

