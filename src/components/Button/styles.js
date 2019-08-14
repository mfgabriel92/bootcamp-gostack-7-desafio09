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
  background: linear-gradient(135deg, #d99556, #ca3201);
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-weight: bold;
  border: 0;
  color: #fff;
  margin-bottom: 15px;
  transition: linear-gradient 0.2s;

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
    background: linear-gradient(135deg, #bb783a, #8f2604);
  }

  &:disabled {
    opacity: 0.2;
  }
`
