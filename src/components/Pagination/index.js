import React from 'react'
import PropTypes from 'prop-types'
import { Left, Right } from './styles'

function Pagination({ onPreviousPage, onNextPage }) {
  return (
    <>
      <Left onClick={onPreviousPage} />
      <Right onClick={onNextPage} />
    </>
  )
}

Pagination.propTypes = {
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
}

export default Pagination
