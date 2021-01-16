import axios from 'axios'

const baseConfig = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610713396967321124339713"}'
  }
})

export default baseConfig
