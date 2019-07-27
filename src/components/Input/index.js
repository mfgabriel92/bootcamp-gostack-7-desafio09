import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@rocketseat/unform'
import { Container } from './styles'

function BaseInput({
  icon: Icon,
  iconSize,
  iconColor,
  name,
  type,
  placeholder,
}) {
  return (
    <Container>
      {Icon && <Icon size={iconSize} color={iconColor} />}
      <Input name={name} type={type} placeholder={placeholder} />
    </Container>
  )
}

BaseInput.propTypes = {
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.any,
  placeholder: PropTypes.string,
}

BaseInput.defaultProps = {
  icon: null,
  iconSize: 20,
  iconColor: '#FFF',
  type: 'text',
  placeholder: '',
}

export default BaseInput
