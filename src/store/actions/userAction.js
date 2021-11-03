import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGUOT, USER_DETAIL, USER_REGISTRATION, LOAD_USER, LOAD_TOKEN, ACCEPTED} from "../types"
import instanse from '../../instanse'
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function deleteItem(key) {
  await SecureStore.deleteItemAsync(key);
}


export const login = data => {
  return async dispatch => {
    const token = await instanse.post(`auth/token/login/`, data)
      .then(resp => {
        const token = resp.data.auth_token
        save('token', token)
        instanse.defaults.headers.common['Authorization'] = 'Token ' + token
        dispatch({ 
          type: USER_LOGIN_SUCCESS,
          payload: {
            token: resp.data.auth_token
          }
        })
        dispatch(User())
        console.log( 'success')

        return resp.data

      })
      .catch(err => {
        console.log( 'error', err.response.data)
        dispatch({ 
          type: USER_LOGIN_FAILED,
          payload: err.response.data
        })
        return err.response
      })    
  }
}

export const token = () => {
  return async dispatch => {
    await SecureStore.getItemAsync('token')
    .then( item => {
      if(item){
        instanse.defaults.headers.common['Authorization'] = 'Token ' + item
        dispatch({ 
          type: LOAD_TOKEN,
          payload: { 
            token: item
          }
        })
      }
    })
      
  }
}

export const accepted = () => {
  return async dispatch => {
    dispatch({
      type: ACCEPTED
    })
      
  }
}

export const User = () => {
  return async dispatch => {
    await instanse.get(`auth/users/me/`)
      .then(resp => {
        // console.log(resp.data)
        dispatch({ 
          type: LOAD_USER,
          payload: resp.data
        })      
        dispatch(userDetail(resp.data.id))
      })
      .catch(err => { 
        console.log('error', err.response.data)
        dispatch({ 
          type: USER_LOGIN_FAILED,
          payload: err.response.data
        })  
        dispatch(logout())
      })
  }
}

export const userDetail = id => {
  return async dispatch => { 
    await instanse.get(`v1/users/detail/${id}`)
      .then(resp => {
        // console.log(resp.data)
        dispatch({ 
          type: USER_DETAIL,
          payload: resp.data
        })      
      })
      .catch(err => { 
        console.log('error', err.response.data)
      })
  }
}

export const logout = () => {
  return async dispatch => {
      await deleteItem('token')
      delete instanse.defaults.headers.common['Authorization']
      dispatch({ 
        type: USER_LOGUOT
      })
  }
}

export const registration = data => {
  return async dispatch => {
    const token = await instanse.post(`auth/users/`, data)
      .then(resp => {
        console.log( 'success')
        dispatch({ 
          type: USER_REGISTRATION,
          payload: data
        })
        return resp.data
      })
      .catch(err => {
        console.log( 'error', err.response.data)
        dispatch({ 
          type: USER_LOGIN_FAILED,
          payload: err.response.data
        })
        return err.response
      })
      // console.log(token)
      
  }
}