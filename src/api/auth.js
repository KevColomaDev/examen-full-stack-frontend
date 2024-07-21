import axios from "axios"

const administratorAPI = 'http://localhost:4321/administrators'

export const loginRequest = async (email, password) => {
  const user = {
    email,
    password
  }
  const response = await axios.post(`${administratorAPI}/login`, user)
  return response.data
}