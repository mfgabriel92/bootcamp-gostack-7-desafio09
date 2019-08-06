import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: #cb4949;
  background: #f9f9f9;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${darken(0.05, '#cb4949')};
    background: ${darken(0.01, '#f9f9f9')};
  }
`
