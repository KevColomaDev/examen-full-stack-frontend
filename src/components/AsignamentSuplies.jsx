import { useForm } from "react-hook-form"
import { registerSuppliesRoom } from "../api/auth"
import { useState, useContext, useEffect } from "react"
import { Mensaje } from "../components/Message"
import { InfoSupliesContext } from "../contexts/InfoSupliesContext"

export const AsignamentSuplies = () => {
  const { register, handleSubmit, reset } = useForm()
  const [error, setError] = useState({})
  const { assignSupliesData } = useContext(InfoSupliesContext)

  const onSubmit = async (data) => {
    try {
      data.toothPaste = Number(data.toothPaste)
      data.soap = Number(data.soap)
      data.toothBrush = Number(data.toothBrush)
      data.towel = Number(data.towel)
      const response = await registerSuppliesRoom(data)
      if (response) {
        assignSupliesData(response)
        reset()
      }
    } catch (error) {
      console.log(error)
      console.log(error.response.data.msg)
      setError({ type: 'Error: ', message: 'No hay suficientes existencias' })
    }
  }

  const closeError = () => setError({})

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.error-message') === null) {
        closeError()
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeError()
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-sky-100 p-4 max-w-2xl rounded-2xl">
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8 mt-8">
            <label htmlFor="room" className="w-32 sm:w-64 text-center">Habitación</label>
            <select name="room" id="room" {...register("room")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="toothPaste" className="w-32 sm:w-64 text-center">Pasta de dientes</label>
            <input type="number" id="toothPaste" placeholder="0" min={0} max={9} className="text-center w-10 sm:w-16 rounded-lg" {...register("toothPaste")}/>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="soap" className="w-32 sm:w-64 text-center">Jabones</label>
            <input type="number" id="soap" placeholder="0" min={0} max={9} className="text-center w-10 sm:w-16 rounded-lg" {...register("soap")}/>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="toothBrush" className="w-32 sm:w-64 text-center">Cepillos</label>
            <input type="number" id="toothBrush" placeholder="0" min={0} max={9} className="text-center w-10 sm:w-16 rounded-lg" {...register("toothBrush")}/>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="towel" className="w-32 sm:w-64 text-center">Toallas</label>
            <input type="number" id="towel" placeholder="0" min={0} max={9} className="text-center w-10 sm:w-16 rounded-lg" {...register("towel")}/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-white w-32 sm:w-44 sm:text-2xl bg-sky-900 p-2 rounded-2xl font-bold mb-8">Asignar</button>
          </div>
        </div>
      </form>
      {Object.keys(error).length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-red-600 text-white p-4 rounded-lg error-message">
            <Mensaje type={error.type} message={error.message}/>
          </div>
        </div>
      )}
    </>
  )
}
