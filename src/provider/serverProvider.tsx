import axios from 'axios'
import { API_URL } from '../config/config'

const baseURL = API_URL

export const serverAPI = axios.create({ baseURL })

// set the token if this exists
