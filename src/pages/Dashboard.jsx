import { Header } from "../components/Header"
import { Description } from "../components/Description"
import { RoomsCards } from "../components/RoomsCards"
export const Dashboard = () => {
  return (
    <>
      <Header />
      <Description />
      <div className="flex justify-center mt-20">
        <RoomsCards />
      </div>
    </>
  )
}