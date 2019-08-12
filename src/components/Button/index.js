import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Button } from './styles'

function BaseButton({
  icon: Icon,
  iconSize,
  iconColor,
  text,
  type,
  isLoading,
}) {
  return (
    <Button type={type} isLoading={isLoading}>
      {Icon && !isLoading && <Icon size={iconSize} color={iconColor} />}
      {isLoading ? <FaSpinner /> : text}
    </Button>
  )
}

BaseButton.propTypes = {
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
}

BaseButton.defaultProps = {
  icon: null,
  iconSize: 20,
  iconColor: '#FFF',
  type: 'submit',
  isLoading: false,
}

export default BaseButton
