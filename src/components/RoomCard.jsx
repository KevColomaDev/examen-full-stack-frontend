import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import { RegisterForm } from './RegisterForm'
import { setParamsInBlankRequest } from '../api/auth'
import { InfoContext } from '../contexts/InfoContext'

export const RoomCard = (props) => {
  const { name, condition, food, admissionDate, room } = props
  const [registerForm, setRegisterForm] = useState(false)
  const { updateDietData } = useContext(InfoContext)
  const [formData, setFormData] = useState({ name, condition, admissionDate, food })

  const handleRegisterClick = () => {
    setRegisterForm(true)
  }

  const handleRegisterClose = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      setRegisterForm(false)
    }
  }

  const closeCompleteForm = (newData) => {
    setFormData(newData)
    setRegisterForm(false)
    updateDietData()
  }

  const onClickDelete = async (roomNumber) => {
    try {
      const response = await setParamsInBlankRequest(roomNumber)
      if (response) {
        setFormData(response)
        updateDietData()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="bg-sky-800 flex flex-col justify-center gap-3 w-96 h-56 rounded-lg" onKeyDown={handleRegisterClose} tabIndex={0}>
        <h1 className="text-3xl text-center text-white font-extrabold font-sans">
          Habitación {room}
        </h1>
        {formData.name === '---' ? (
          <button className='bg-white text-black font-extrabold font-sans h-10 w-36 mx-auto rounded-lg' onClick={handleRegisterClick}>Ingresar Datos</button>
        ) : (
          <>
            <div className="ml-5 text-white font-extrabold font-sans">
              <h3>Nombre: {formData.name}</h3>
              <h3>Condicion: {formData.condition}</h3>
              <h3>Comida: {formData.food}</h3>
              <h3>Fecha de ingreso: {formData.admissionDate}</h3>
            </div>
            <div className="flex mx-auto gap-2">
              <button className="bg-white text-black font-extrabold font-sans h-10 w-28 rounded-lg" onClick={handleRegisterClick}>Modificar</button>
              <button className="bg-red-600 text-slate-50 border-2 border-red-950 font-extrabold font-sans h-10 w-28 rounded-lg" onClick={() => onClickDelete(room)}>Dar de Alta</button>
            </div>
          </>
        )}
        {registerForm && (
          <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-50' onClick={handleRegisterClose}>
            <div className='bg-white p-8 rounded-lg'>
              <RegisterForm 
                h_number={room} 
                completeForm={closeCompleteForm} 
                initialData={formData}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

RoomCard.propTypes = {
  room: PropTypes.number,
  name: PropTypes.string,
  condition: PropTypes.string,
  food: PropTypes.string,
  admissionDate: PropTypes.string
}
