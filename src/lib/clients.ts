import axios from 'axios'

export const adminClient = axios.create({
  baseURL: 'http://localhost:3000/api/admin',
})
