import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`

export const Container = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  width: 64px;
  height: 64px;
  animation: ${animate} 1.2s infinite;

  &::after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #cb4949;
    border-color: #cb4949 transparent #cb4949 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
`
