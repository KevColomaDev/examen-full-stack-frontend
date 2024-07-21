import { useForm } from "react-hook-form"
import { loginRequest } from "../api/auth"

export const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const response = await loginRequest(data.email, data.password)
    console.log(response)
  }
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="user@example.com"
              className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm ring-0.5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email", { required: true })}
            />
          </div>

          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm ring-0.5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password", { required: true })}
            />
          </div>

          <div className="mt-4">
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
        </form>
      </div>
  )
}