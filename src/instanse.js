import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://85.214.188.219:7000/api/',
  headers: {
    accept: 'application/json',
  }
})
export default instance 