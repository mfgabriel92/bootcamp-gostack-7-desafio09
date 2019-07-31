import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  padding: 10px;
  margin-bottom: 0;
  color: #fff;
  align-items: center;
  display: flex;
  background: ${props => props.bgColor};
  transition: background 0.2s;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${props => lighten(0.1, props.bgColor)};
  }
`
