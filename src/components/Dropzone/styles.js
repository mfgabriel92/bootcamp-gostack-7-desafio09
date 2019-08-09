import styled from 'styled-components'

export const Container = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`
