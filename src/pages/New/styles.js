import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
    letter-spacing: 1.1px;
    font-weight: 100;

    span {
      font-weight: bold;
    }
  }

  form {
    margin: auto;
    margin-top: 30px;
    width: 920px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #353f60;
    box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
    padding: 20px 30px;
    border-radius: 4px;

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 7px;
      margin-top: 12px;
      color: #fcfcfc;
    }

    div {
      input,
      textarea {
        color: #fcfcfc;

        &::placeholder {
          color: #fcfcfc;
        }
      }
    }

    textarea {
      width: 100%;
      min-height: 100px;
      padding-top: 10px;
    }
  }
`

export const DateLocation = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    &:nth-of-type(2) {
      flex-grow: 1;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 30px;

  button {
    margin: 0;
  }
`
