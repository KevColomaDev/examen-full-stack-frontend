import { useForm } from "react-hook-form"
import { loginRequest } from "../api/auth"
import { useState } from "react"
import { Mensaje } from "../components/Message"
import { Header } from "../components/Header"
import logoSolca from "../assets/logoSolca.png"

export const Login = () => {
  // Prevent default form submission
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState({})


  const onSubmit = async (data) => {
    try {
      const response = await loginRequest(data)
      if (response) {
        window.location.href = "/"
      }
    } catch (error) {
      console.log(error.response.data.msg)
      setError({ type: 'Error: ', message: error.response.data.msg })
      console.log(error)
    }
  }
  
  return (
    <>
    <Header />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Solca Logo"
            src={logoSolca}
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
        </div>
        <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Ususario
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="user@example.com"
              className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm ring-0.5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email")}
            />
          </div>

          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Contraseña
          </label>
          <div className="mt-2">
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm ring-0.5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password")}
            />
          </div>

          <div className="mt-4">
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm aspect-[9/1]">
            {Object.keys(error).length > 0 && <Mensaje type={error.type} message={error.message}/>}
          </div>
        </form>
      </div>
    </>
  )
}