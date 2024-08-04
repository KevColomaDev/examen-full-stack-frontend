import { useForm } from "react-hook-form"
import PropTypes from 'prop-types'
import { registerInRoomRequest } from "../api/auth"


export const RegisterForm = ( { h_number, completeForm } ) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    try {
      const formData = {
        h_number: h_number,
        ...data
      }
      const response = await registerInRoomRequest(formData)
      if (response) {
        completeForm(formData)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="flex flex-col gap-3 bg-sky-800 p-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-white font-extrabold font-sans" htmlFor="name">Nombres</label>
      <input className="text-black font-extrabold font-sans px-2 py-1 rounded-md"
        type="text"
        id="name"
        placeholder="Ej. Jon Doe"
        {...register("name", { required: true })}
      />
      <label className="text-white font-extrabold font-sans" htmlFor="condition">Condición</label>
      <input className="text-black font-extrabold font-sans px-2 py-1 rounded-md"
        type="text"
        id="condition"
        placeholder="Ej. Anemia"
        {...register("condition", { required: true })}
      />
      <label className="text-white font-extrabold font-sans" htmlFor="food">Comida</label>
      <select className="text-black font-extrabold font-sans px-2 py-1 rounded-md" id="food" {...register("food", { required: true })}>
        <option value="Blanda">Blanda</option>
        <option value="Liquida">Liquida</option>
        <option value="Normal">Normal</option>
      </select>
      <label className="text-white font-extrabold font-sans" htmlFor="date">Fecha de Ingreso</label>
      <input className="text-black font-extrabold font-sans px-2 py-1 rounded-md"
        type="date"
        id="date"
        {...register("date", { required: true })}
      />
      <button type="submit" className="bg-white text-black font-extrabold font-sans h-10 w-36 mx-auto rounded-lg">Registrar</button>
    </form>
  )
}

RegisterForm.propTypes = {
  h_number: PropTypes.number,
  completeForm: PropTypes.func
}