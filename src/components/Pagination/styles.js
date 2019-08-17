import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Left = styled(FaChevronLeft).attrs({
  size: 72,
  color: '#FFF',
})`
  position: fixed;
  left: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.15, 1.15);
  }
`
export const Right = styled(FaChevronRight).attrs({
  size: 72,
  color: '#FFF',
})`
  position: fixed;
  right: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.15, 1.15);
  }
`
