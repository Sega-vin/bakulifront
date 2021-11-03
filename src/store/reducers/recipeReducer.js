import { GET_STORE, LOAD_RECIPE, ADD_RECIPE, DELETE_RECIPE, LOAD_RECIPEID, LOAD_ADDITIONAL } from "../types"

const initialState = {
  allRecipe: [],
  oneRecipe: [],
  additional: [],
  store: []
}

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPE: return {
      ...state,
      allRecipe: action.payload,
    }
    case LOAD_RECIPEID: return {
      ...state,
      oneRecipe: action.payload,
    }
    case ADD_RECIPE: return {
      ...state,
      allRecipe: action.payload,
    }
    case LOAD_ADDITIONAL: return {
      ...state,
      additional: action.payload,
    }
    case GET_STORE: return {
      ...state,
      store: action.payload
    }
    default: return state
  }
  return state
}