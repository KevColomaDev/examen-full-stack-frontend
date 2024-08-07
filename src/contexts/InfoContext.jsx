import { createContext, useState, useEffect } from 'react'
import { dietDataRequest } from '../api/auth'
import PropTypes from 'prop-types'

const InfoContext = createContext()

const InfoProvider = ({ children }) => {
  const [availableRooms, setAvailableRooms] = useState(0)
  const [normalDiet, setNormalDiet] = useState(0)
  const [blandDiet, setBlandDiet] = useState(0)
  const [liquidDiet, setLiquidDiet] = useState(0)

  useEffect(() => {
    const dietData = async () => {
      const response = await dietDataRequest()
      setAvailableRooms(response.availableRooms)
      setNormalDiet(response.normalDiet)
      setBlandDiet(response.blandDiet)
      setLiquidDiet(response.liquidDiet)
    }
    dietData()
  }, [])

  const updateDietData = async () => {
    const response = await dietDataRequest()
    setAvailableRooms(response.availableRooms)
    setNormalDiet(response.normalDiet)
    setBlandDiet(response.blandDiet)
    setLiquidDiet(response.liquidDiet)
  }

  return (
    <InfoContext.Provider
      value={{
        availableRooms,
        normalDiet,
        blandDiet,
        liquidDiet,
        updateDietData,
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}

export { InfoContext, InfoProvider }

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}