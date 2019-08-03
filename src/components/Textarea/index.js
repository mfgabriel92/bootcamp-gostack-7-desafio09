import React from 'react'
import PropTypes from 'prop-types'
import { Textarea } from '@rocketseat/unform'
import { Wrapper, Container } from './styles'

function BaseTextarea({
  label,
  icon: Icon,
  iconSize,
  iconColor,
  borderColor,
  name,
  type,
  placeholder,
}) {
  return (
    <Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <Container bordercolor={borderColor}>
        {Icon && <Icon size={iconSize} color={iconColor} />}
        <Textarea id={name} name={name} type={type} placeholder={placeholder} />
      </Container>
    </Wrapper>
  )
}

BaseTextarea.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.any,
  placeholder: PropTypes.string,
}

BaseTextarea.defaultProps = {
  label: null,
  icon: null,
  iconSize: 20,
  iconColor: '#FFF',
  borderColor: '#FFF',
  type: 'text',
  placeholder: '',
}

export default BaseTextarea
