import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'
import { Wrapper, Container } from './styles'

function DateInput({ label, name, borderColor }) {
  return (
    <Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <Container bordercolor={borderColor}>
        <DatePicker name="name" />
      </Container>
    </Wrapper>
  )
}

DateInput.propTypes = {
  label: PropTypes.string,
  borderColor: PropTypes.string,
  name: PropTypes.string.isRequired,
}

DateInput.defaultProps = {
  label: null,
  borderColor: '#FFF',
}

export default DateInput
