import styled from 'styled-components'

export const Wrapper = styled.div`
  background: transparent;
  width: 50%;
  margin-right: 10px;
  font-family: Montserrat;
  font-weight: bold;
`

export const Container = styled.div`
  .react-datetime-picker__wrapper {
    padding-left: 10px;
  }
  .react-datetime-picker,
  .react-datetime-picker__wrapper {
    width: 100%;
    border: none;
    border-radius: 8px;
  }
  .react-datetime-picker__wrapper {
    height: 46px;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
  }

  .react-datetime-picker__inputGroup {
  }

  input {
    color: #fcfcfc;
  }
`
