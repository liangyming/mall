import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://192.168.0.110:5000',
    timeout: 6000
  })
  return instance(config)
}

