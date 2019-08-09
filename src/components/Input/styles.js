import styled from 'styled-components'

export const Wrapper = styled.div`
  background: transparent;
`

export const Container = styled.div`
  border: 0;
  height: 46px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;

  svg {
    margin-right: 15px;
  }

  input {
    background: none;
    border: 0;
    font-weight: bold;
    flex: 1;
    height: 100%;
    color: #fcfcfc;

    &::placeholder {
      color: #fcfcfc;
    }
  }
`
