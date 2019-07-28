import React from 'react'
import PropTypes from 'prop-types'

function ErrorMessage({ errors }) {
  return (
    <>
      {errors.map(error => (
        <p key={error}>{error}</p>
      ))}
    </>
  )
}

ErrorMessage.propTypes = {
  errors: PropTypes.array.isRequired,
}

export default ErrorMessage
