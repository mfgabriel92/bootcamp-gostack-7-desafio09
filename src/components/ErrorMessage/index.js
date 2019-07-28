import React from 'react'
import PropTypes from 'prop-types'
import { Error, Ball } from './styles'

function ErrorMessage({ errors }) {
  return (
    <>
      {errors.map(error => (
        <Error key={error}>
          <Ball /> {error}
        </Error>
      ))}
    </>
  )
}

ErrorMessage.propTypes = {
  errors: PropTypes.array.isRequired,
}

export default ErrorMessage
