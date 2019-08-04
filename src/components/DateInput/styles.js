import styled from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  background: transparent;
  width: 50%;
  margin-right: 10px;
  font-family: Montserrat;
  font-weight: bold;
`

export const Container = styled.div`
  border: 1px solid ${props => lighten(0.3, props.bordercolor)};

  .react-datetime-picker,
  .react-datetime-picker__wrapper {
    width: 100%;
    border: none;
  }
  .react-datetime-picker__wrapper {
    height: 44px;
    bottom: 0;
    background: #fff;
  }
`
