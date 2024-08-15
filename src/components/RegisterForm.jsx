import { useForm } from "react-hook-form"
import PropTypes from 'prop-types'
import { registerInRoomRequest } from "../api/auth"
import { useEffect } from "react"


export const RegisterForm = ({ h_number, completeForm, initialData, completedForm }) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialData })

  const parseDate = (date) => {
    if (!date || date.includes('-')) return date
    const [day, month, year] = date.split('/')
    return `${year}-${month}-${day}`
  }

  const formatDate = (date) => {
    if (!date) return ''
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  }

  const onSubmit = async (data) => {
    try {
      const formData = {
        h_number: h_number,
        ...data,
        admissionDate: data.admissionDate ? formatDate(data.admissionDate) : ''
      }
      const response = await registerInRoomRequest(formData)
      if (response.msg === 'Patient registered') {
        completedForm(formData)
      } else {
        completeForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const formattedData = {
      name: '' || initialData.name.includes('-') ? '' : initialData.name,
      condition: '' || initialData.condition.includes('-') ? '' : initialData.condition,
      food: '' || initialData.food.includes('-') ? '' : initialData.food,
      admissionDate: '' || initialData.admissionDate.includes('-') ? '' : parseDate(initialData.admissionDate)
    }
    reset(formattedData)
  }, [initialData, reset])

  return (
    <form className="flex flex-col gap-3 bg-sky-800 p-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-white font-extrabold font-sans" htmlFor="name">Nombres</label>
      <input className="text-black font-extrabold font-sans px-2 py-1 rounded-md"
        type="text"
        id="name"
        placeholder="Ej. Jon Doe"
        {...register("name", {
          required: "El nombre es requerido.",
          pattern: {
            value: /^[A-Za-z\s]+$/i,
            message: "Solo se permiten letras y espacios."
          },
          maxLength: {
            value: 30,
            message: "El nombre no puede tener más de 30 caracteres."
          },
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos 3 caracteres."
          }
        })}
      />
      {errors.name && <span className="text-red-500 font-bold">{errors.name.message}</span>}

      <label className="text-white font-extrabold font-sans" htmlFor="condition">Condición</label>
      <input className="text-black font-extrabold font-sans px-2 py-1 rounded-md"
        type="text"
        id="condition"
        placeholder="Ej. Anemia"
        {...register("condition", {
          required: "La condición es requerida.",
          pattern: {
            value: /^[A-Za-z\s]+$/i,
            message: "Solo se permiten letras y espacios."
          },
          maxLength: {
            value: 20,
            message: "La condición no puede tener más de 30 caracteres."
          },
          minLength: {
            value: 3,
            message: "La condición debe tener al menos 3 caracteres."
          }
        })}
      />
      {errors.condition && <span className="text-red-500 font-bold">{errors.condition.message}</span>}

      <label className="text-white font-extrabold font-sans" htmlFor="food">Comida</label>
      <select className="text-black font-extrabold font-sans px-2 py-1 rounded-md" id="food" {...register("food", { required: "La comida es requerida." })}>
        <option value="Blanda">Blanda</option>
        <option value="Liquida">Líquida</option>
        <option value="Normal">Normal</option>
      </select>
      {errors.food && <span className="text-red-500 font-bold">{errors.food.message}</span>}

      <label className="text-white font-extrabold font-sans" htmlFor="date">Fecha de Ingreso</label>
      <input className="text-black font-extrabold font-sans px-2 py-1 rounded-md"
        type="date"
        id="date"
        {...register("admissionDate", { required: "La fecha de ingreso es requerida." })}
      />
      {errors.admissionDate && <span className="text-red-500 font-bold">{errors.admissionDate.message}</span>}

      <button type="submit" className="bg-white text-black font-extrabold font-sans h-10 w-36 mx-auto rounded-lg">Registrar</button>
    </form>
  )
}

RegisterForm.propTypes = {
  h_number: PropTypes.number,
  completeForm: PropTypes.func,
  initialData: PropTypes.object,
  completedForm: PropTypes.func
}
