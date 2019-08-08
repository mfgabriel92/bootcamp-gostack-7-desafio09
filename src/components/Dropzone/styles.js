import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: orangered;
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    color: ${darken(0.05, 'orangered')};
    background: rgba(255, 255, 255, 0.2);
  }
`
