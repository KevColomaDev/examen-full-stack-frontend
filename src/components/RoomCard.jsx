import PropTypes from 'prop-types'
import { useState } from 'react'
import { RegisterForm } from './RegisterForm'

export const RoomCard = (props) => {
  const { name } = props
  const [registerForm, setRegisterForm] = useState(false)

  const handleRegisterClick = () => {
    setRegisterForm(true)
  }
  const handleRegisterClose = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      setRegisterForm(false)
    }
  }
  const closeCompleteForm = () => {
    setRegisterForm(false)
  }
  return (
    <>
      <div className="bg-sky-800 flex flex-col justify-center gap-3 w-96 h-56 rounded-lg" onKeyDown={handleRegisterClose} tabIndex={0}>
          <h1 className="text-3xl text-center text-white font-extrabold font-sans">
            Habitación {props.room}
          </h1>
          {name === '---' ? (
            <button className='bg-white text-black font-extrabold font-sans h-10 w-36 mx-auto rounded-lg' onClick={handleRegisterClick}>Ingresar Datos</button>
            
          ): (
            <>
              <div className="ml-5 text-white font-extrabold font-sans">
                <h3>Nombre: {props.name}</h3>
                <h3>Condicion: {props.condition}</h3>
                <h3>Comida: {props.food}</h3>
                <h3>Fecha de ingreso: {props.date}</h3>
              </div>
              <button className="bg-white text-black font-extrabold font-sans h-10 w-28 mx-auto rounded-lg">Modificar</button>
            </>
          )}
          {registerForm && (
              <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-50' onClick={handleRegisterClose}>
                <div className='bg-white p-8 rounded-lg'>
                  <RegisterForm h_number={props.room} completeForm={closeCompleteForm} />
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
  date: PropTypes.string
}