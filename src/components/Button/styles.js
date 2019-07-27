import styled, { keyframes, css } from 'styled-components'

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
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.bgColor};
  height: 44px;
  font-weight: bold;
  border: 0;
  color: #fff;
  margin-bottom: 15px;
  transition: opacity 0.2s;

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
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
  }
`
