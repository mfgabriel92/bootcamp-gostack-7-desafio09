import styled from 'styled-components'

export const Container = styled.div`
  color: #171618;

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
    background: #fff;
    border-bottom: 3px solid #cb4949;
    box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
    padding: 20px 30px;

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 7px;
      color: #171618;
    }

    div {
      input,
      textarea {
        color: #171618;

        &::placeholder {
          color: #171618;
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
  background: inherit !important;

  div {
    &:nth-of-type(2) {
      flex-grow: 1;
    }
  }
`

export const Buttons = styled.div`
  background: inherit !important;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 30px;

  button {
    margin: 0;
  }
`
