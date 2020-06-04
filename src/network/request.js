import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://127.0.0.1:5000',
    timeout: 9000
  })
  return instance(config)
}

