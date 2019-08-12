import styled from 'styled-components'

export const Container = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: rgba(0, 0, 0, 0.1);
  background: #b1b2b51c;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #b1b2b540;
  }
`
