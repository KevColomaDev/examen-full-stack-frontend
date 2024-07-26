import axios from "axios"

const administratorAPI = 'http://localhost:4321/administrators'

export const loginRequest = async (user) => {
  const response = await axios.post(`${administratorAPI}/login`, user)
  return console.log(response.data)
}
