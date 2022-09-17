import axios from '../utils/apiClient'
const baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const methods = { login }
export default methods
