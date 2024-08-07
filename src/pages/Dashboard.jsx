import { Header } from "../components/Header"
import { Description } from "../components/Description"
import { RoomsCards } from "../components/RoomsCards"
import { InfoProvider } from "../contexts/InfoContext"
export const Dashboard = () => {
  return (
    <>
      <Header />
      <InfoProvider>
        <Description />
        <div className="flex justify-center mt-20">
          <RoomsCards />
        </div>
      </InfoProvider>
    </>
  )
}