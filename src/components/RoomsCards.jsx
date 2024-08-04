import { RoomCard } from "./RoomCard"
import { dataRoomRequest } from "../api/auth"
import { useEffect, useState } from "react"

export const RoomsCards = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const roomData = async () => {
      const roomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      const roomData = await Promise.all(roomNumbers.map(number => dataRoomRequest(number)))
      setRooms(roomData)
    }

    roomData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-3 gap-20">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            room={room.h_number}
            name={room.name}
            condition={room.condition}
            food={room.food}
            date={room.admissionDate}
          />
        ))}
      </div>
    </>
  )
}
