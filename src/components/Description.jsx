import { useContext } from 'react'
import { InfoContext } from '../contexts/InfoContext'

export const Description = () => {
  const { availableRooms, normalDiet, blandDiet, liquidDiet } = useContext(InfoContext)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-white font-extrabold font-sans min-h-80">
        <div className="col-span-1 bg-sky-800 flex flex-col justify-center items-center gap-3 py-5">
          <h1 className="text-3xl"> 
            Habitaciones
          </h1>
          <span className="text-8xl">
            {availableRooms}
          </span>
          <h2 className="text-3xl">
            Disponibles
          </h2>
        </div>
        <div className="col-span-2 bg-sky-700">
          <h3 className="text-2xl sm:text-3xl flex justify-center p-2 sm:p-10">Dieta</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 mb-5">
            <div className="flex flex-row sm:flex-col justify-center items-center gap-5">
              <h1 className="text-lg sm:text-2xl font-extrabold">Desayuno</h1>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Normal<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{normalDiet}</span></h2>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Blanda<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{blandDiet}</span></h2>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Líquida<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{liquidDiet}</span></h2>
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-center gap-5">
              <h1 className="text-lg sm:text-2xl font-extrabold">Almuerzo</h1>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Normal<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{normalDiet}</span></h2>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Blanda<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{blandDiet}</span></h2>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Líquida<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{liquidDiet}</span></h2>
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-center gap-5">
              <h1 className="text-lg sm:text-2xl font-extrabold">Merienda</h1>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Normal<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{normalDiet}</span></h2>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Blanda<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{blandDiet}</span></h2>
              <h2 className="text-base sm:text-xl font-normal sm:font-bold">Líquida<span className="text-base sm:text-xl font-normal sm:font-bold ml-3 sm:ml-5">{liquidDiet}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}