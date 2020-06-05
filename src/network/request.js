import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://47.107.99.96:5000',
    timeout: 9000
  })
  return instance(config)
}

