import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

function ButtonLink({ to, icon: Icon, iconSize, iconColor, text }) {
  return (
    <Button to={to}>
      {Icon && <Icon size={iconSize} color={iconColor} />}
      {text}
    </Button>
  )
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  text: PropTypes.string,
}

ButtonLink.defaultProps = {
  icon: null,
  iconSize: 20,
  iconColor: '#FFF',
  text: '',
}

export default ButtonLink
