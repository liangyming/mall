import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 6000
  })
  return instance(config)
}

