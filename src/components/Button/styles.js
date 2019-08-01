import styled, { keyframes, css } from 'styled-components'
import { darken, lighten } from 'polished'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Button = styled.button.attrs(props => ({
  disabled: props.isLoading,
}))`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.bgcolor};
  height: 44px;
  font-weight: bold;
  border: 0;
  color: #fff;
  margin-bottom: 15px;
  transition: background 0.2s;

  svg {
    margin-right: 10px;
  }

  ${props =>
    props.isLoading &&
    css`
      svg {
        animation: ${rotate} 0.4s linear infinite;
      }
    `}

  &:hover {
    background: ${props => darken(0.1, props.bgcolor)};
  }

  &:disabled {
    background: ${props => lighten(0.25, props.bgcolor)};
  }
`
