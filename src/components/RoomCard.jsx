import PropTypes from 'prop-types'


export const RoomCard = (props) => {
  const { name } = props
  return (
    <>
      <div className="bg-sky-800 flex flex-col justify-center gap-3 w-96 h-56 rounded-lg">
          <h1 className="text-3xl text-center text-white font-extrabold font-sans">
            Habitación {props.room}
          </h1>
          {name === '---' ? (
            <button className='bg-white text-black font-extrabold font-sans h-10 w-36 mx-auto rounded-lg'>Ingresar Datos</button>
          ): (
            <>
              <div className="ml-5 text-white font-extrabold font-sans">
                <h3>Nombre: {props.name}</h3>
                <h3>Condicion: {props.condition}</h3>
                <h3>Comida: {props.food}</h3>
                <h3>Fecha de ingreso: {props.date}</h3>
              </div>
              <button className="bg-white text-black font-extrabold font-sans h-10 w-28 mx-auto rounded-lg">Modificar</button>
            </>
          )}
      </div>
    </>
  )
}
RoomCard.propTypes = {
  room: PropTypes.number,
  name: PropTypes.string,
  condition: PropTypes.string,
  food: PropTypes.string,
  date: PropTypes.string
}