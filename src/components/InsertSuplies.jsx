import { useForm } from "react-hook-form"
import { registerSpplies } from "../api/auth"

export const InsertSuplies = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    try {
      data.toothPaste = Number(data.toothPaste)
      data.soap = Number(data.soap)
      data.toothBrush = Number(data.toothBrush)
      data.towel = Number(data.towel)
      const response = await registerSpplies(data)
      if (response) {
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form className="max-w-2xl rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-sky-100 p-4 max-w-2xl rounded-2xl">
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8 mt-8">
            <label htmlFor="toothPaste" className="w-32 sm:w-64 text-center">Pasta de dientes</label>
            <input type="number" id="toothPaste" placeholder="0" min={0} max={9} defaultValue={0} className="text-center w-10 sm:w-16 rounded-lg " {...register("toothPaste")}/>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="soap" className="w-32 sm:w-64 text-center">Jabones</label>
            <input type="number" id="soap" placeholder="0" min={0} max={9} defaultValue={0} className="text-center w-10 sm:w-16 rounded-lg " {...register("soap")}/>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="toothBrush" className="w-32 sm:w-64 text-center">Cepillos</label>
            <input type="number" id="toothBrush" placeholder="0" min={0} max={9} defaultValue={0} className="text-center w-10 sm:w-16 rounded-lg " {...register("toothBrush")}/>
          </div>
          <div className="flex flex-row justify-center gap-2 font-bold sm:text-3xl mb-8">
            <label htmlFor="towel" className="w-32 sm:w-64 text-center">Toallas</label>
            <input type="number" id="towel" placeholder="0" min={0} max={9} defaultValue={0} className="text-center w-10 sm:w-16 rounded-lg " {...register("towel")}/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-white w-32 sm:w-44 sm:text-2xl bg-sky-900 p-2 rounded-2xl font-bold mb-8">Ingresar</button>
          </div>
        </div>
      </form>
    </>
  )
}
