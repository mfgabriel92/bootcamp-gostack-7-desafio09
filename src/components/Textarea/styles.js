import styled from 'styled-components'

export const Wrapper = styled.div`
  background: transparent;
`

export const Container = styled.div`
  border: 0;
  padding: 0 15px;
  margin: 0 0 10px;
  display: flex;
  flex-direction: row;
  background: #b1b2b51c;
  border: 1px solid #ececec;
  svg {
    margin-right: 15px;
    margin-top: 10px;
  }

  textarea {
    padding-top: 10px;
    background: none;
    border: 0;
    font-weight: bold;
    flex: 1;
    height: 100%;
    color: #2d3450;

    &::placeholder {
      color: #2d3450;
    }
  }
`
