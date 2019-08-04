import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datetime-picker'
import { Wrapper, Container } from './styles'

function DateInput({ label, name, borderColor, value, onChange }) {
  return (
    <Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <Container bordercolor={borderColor}>
        <DatePicker
          name="name"
          minDate={new Date()}
          format="yyyy-MM-dd HH:mm:00"
          value={value}
          onChange={onChange}
        />
      </Container>
    </Wrapper>
  )
}

DateInput.propTypes = {
  label: PropTypes.string,
  borderColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

DateInput.defaultProps = {
  label: null,
  borderColor: '#FFF',
}

export default DateInput
