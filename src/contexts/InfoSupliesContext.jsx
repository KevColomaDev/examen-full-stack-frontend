import { createContext, useState, useEffect } from "react"
import { getAllSuppliesRequest } from "../api/auth"
import PropTypes from 'prop-types'

const InfoSupliesContext = createContext()

const InfoSupliesProvider = ({ children }) => {
  const [toothPaste, setToothPaste] = useState(0)
  const [soap, setSoap] = useState(0)
  const [toothBrush, setToothBrush] = useState(0)
  const [towel, setTowel] = useState(0)

  useEffect(() => {
    const suppliesData = async () => {
      const response = await getAllSuppliesRequest()
      setToothPaste(response.toothPaste)
      setSoap(response.soap)
      setToothBrush(response.toothBrush)
      setTowel(response.towel)
    }
    suppliesData()
  }, [])

  const assignSupliesData = async () => {
    const response = await getAllSuppliesRequest()
    setToothPaste(response.toothPaste)
    setSoap(response.soap)
    setToothBrush(response.toothBrush)
    setTowel(response.towel)
  }

  return (
    <InfoSupliesContext.Provider
      value={{
        toothPaste,
        soap,
        toothBrush,
        towel,
        assignSupliesData
      }}
    >
      {children}
    </InfoSupliesContext.Provider>
  )
}

InfoSupliesProvider.propTypes = {
  children: PropTypes.node
}

export { InfoSupliesContext, InfoSupliesProvider }