import axios from "axios"

const administratorAPI = 'http://localhost:4321/administrators'
// const administratorAPI = 'https://backend-hospital-0f3d.onrender.com/administrators'

export const loginRequest = async (user) => {
  const response = await axios.post(`${administratorAPI}/login`, user, { withCredentials: true })
  return response.data
}

export const dietDataRequest = async () => {
  const response = await axios.get(`${administratorAPI}/diet-data`, { withCredentials: true })
  return response.data
}

export const dataRoomRequest = async (roomNumber) => {
  const response = await axios.get(`${administratorAPI}/data-room/${roomNumber}`, { withCredentials: true })
  return response.data
}

export const registerInRoomRequest = async (data) => {
  const response = await axios.post(`${administratorAPI}/register-in-room`, data, { withCredentials: true })
  return response.data
}

export const logoutRequest = async () => {
  const response = await axios.get(`${administratorAPI}/logout`, { withCredentials: true })
  return response.data
}

export const verifyRequest = async () => {
  const response = await axios.get(`${administratorAPI}/verify`, { withCredentials: true })
  return response.data
}

export const setParamsInBlankRequest = async (roomNumber) => {
  const response = await axios.get(`${administratorAPI}/set-params-in-blank/${roomNumber}`, { withCredentials: true })
  return response.data
}