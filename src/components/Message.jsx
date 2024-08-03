import PropTypes from 'prop-types';

export const Mensaje = ({ type, message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">{type}</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  )
}

Mensaje.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};