import { dietDataRequest } from "../api/auth"
import { useEffect, useState } from "react"

export const Description = () => {
  const [availableRooms, setAvailableRooms] = useState(0)
  const [normalDiet, setNormalDiet] = useState(0)
  const [blandDiet, setBlandDiet] = useState(0)
  const [liquidDiet, setLiquidDiet] = useState(0)
  useEffect(() => {
    const dietData = async () => {
      const response = await dietDataRequest()
      setAvailableRooms(response.availableRooms)
      setNormalDiet(response.normalDiet)
      setBlandDiet(response.blandDiet)
      setLiquidDiet(response.liquidDiet)
    }
    dietData()
  }, [])
  return (
    <>
      <div className="grid grid-cols-3 text-white font-extrabold font-sans">
        <div className="ccol-span-1 bg-sky-800 flex flex-col justify-center items-center gap-3 py-16">
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
          <h3 className="text-3xl flex justify-center p-10">Dieta</h3>
          <div className="grid grid-cols-3">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-extrabold">Desayuno</h1>
              <h2 className="text-xl font-bold">Normal<span className="text-xl font-bold ml-5">{normalDiet}</span></h2>
              <h2 className="text-xl font-bold">Blanda<span className="text-xl font-bold ml-5">{blandDiet}</span></h2>
              <h2 className="text-xl font-bold">Líquida<span className="text-xl font-bold ml-5">{liquidDiet}</span></h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-extrabold">Almuerzo</h1>
              <h2 className="text-xl font-bold">Normal<span className="text-xl font-bold ml-5">{normalDiet}</span></h2>
              <h2 className="text-xl font-bold">Blanda<span className="text-xl font-bold ml-5">{blandDiet}</span></h2>
              <h2 className="text-xl font-bold">Líquida<span className="text-xl font-bold ml-5">{liquidDiet}</span></h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-extrabold">Merienda</h1>
              <h2 className="text-xl font-bold">Normal<span className="text-xl font-bold ml-5">{normalDiet}</span></h2>
              <h2 className="text-xl font-bold">Blanda<span className="text-xl font-bold ml-5">{blandDiet}</span></h2>
              <h2 className="text-xl font-bold">Líquida<span className="text-xl font-bold ml-5">{liquidDiet}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}