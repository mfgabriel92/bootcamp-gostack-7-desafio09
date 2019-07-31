import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@rocketseat/unform'
import { Container } from './styles'

function BaseInput({
  label,
  icon: Icon,
  iconSize,
  iconColor,
  name,
  type,
  placeholder,
}) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Container>
        {Icon && <Icon size={iconSize} color={iconColor} />}
        <Input id={name} name={name} type={type} placeholder={placeholder} />
      </Container>
    </>
  )
}

BaseInput.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.any,
  placeholder: PropTypes.string,
}

BaseInput.defaultProps = {
  label: null,
  icon: null,
  iconSize: 20,
  iconColor: '#FFF',
  type: 'text',
  placeholder: '',
}

export default BaseInput
