import { DescriptionSuplies } from "../components/DescriptionSuplies"
import { InsertSuplies } from "../components/InsertSuplies"
import { AsignamentSuplies } from "../components/AsignamentSuplies"
import { InfoSupliesProvider } from "../contexts/InfoSupliesContext"

export const Suplies = () => {
  return (
    <>
      <InfoSupliesProvider>
        <DescriptionSuplies />
        <div className="flex flex-col-reverse sm:flex-row justify-center sm:mt-10">
          <div className="sm:w-1/2">
            <InsertSuplies />
          </div>
          <div className="sm:w-1/3">
            <AsignamentSuplies />
          </div>
        </div>
      </InfoSupliesProvider>
    </>
  )
}