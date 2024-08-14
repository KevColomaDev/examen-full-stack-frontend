import { Header } from "./Header"
import { useContext } from "react"
import { InfoSupliesContext } from "../contexts/InfoSupliesContext"
export const DescriptionSuplies = () => {
  const { toothPaste, soap, toothBrush, towel } = useContext(InfoSupliesContext)
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 sm:grid-cols-4 text-center bg-sky-800 text-white font-sans min-h-60 sm:min-h-80">
        <div className="grid grid-cols-1 place-content-center border-2 sm:border-none border-sky-900">
          <h1 className="text-3xl sm:text-8xl font-extrabold sm:mb-2">{toothPaste}</h1>
          <h2 className="text-1xl sm:text-4xl font-normal sm:font-extrabold">Pasta de dientes</h2>
        </div>
        <div className="grid grid-cols-1 place-content-center border-2 sm:border-none border-sky-900">
          <h1 className="text-3xl sm:text-8xl font-extrabold sm:mb-2">{soap}</h1>
          <h2 className="text-1xl sm:text-4xl font-normal sm:font-extrabold">Jabones</h2>
        </div>
        <div className="grid grid-cols-1 place-content-center border-2 sm:border-none border-sky-900">
          <h1 className="text-3xl sm:text-8xl font-extrabold sm:mb-2">{toothBrush}</h1>
          <h2 className="text-1xl sm:text-4xl font-normal sm:font-extrabold">Cepillos</h2>
        </div>
        <div className="grid grid-cols-1 place-content-center border-2 sm:border-none border-sky-900">
          <h1 className="text-3xl sm:text-8xl font-extrabold sm:mb-2">{towel}</h1>
          <h2 className="text-1xl sm:text-4xl font-normal sm:font-extrabold">Toallas</h2>
        </div>
      </div>
    </>
  )
}