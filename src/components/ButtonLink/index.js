import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

function ButtonLink({ to, bgColor, icon: Icon, iconSize, iconColor, text }) {
  return (
    <Button to={to} bgColor={bgColor}>
      {Icon && <Icon size={iconSize} color={iconColor} />}
      {text}
    </Button>
  )
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  text: PropTypes.string.isRequired,
}

ButtonLink.defaultProps = {
  icon: null,
  iconSize: 20,
  iconColor: '#FFF',
}

export default ButtonLink
