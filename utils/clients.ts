import axios from 'axios'

export const adminClient = axios.create({
  baseURL: 'http://localhost:8080',
})
