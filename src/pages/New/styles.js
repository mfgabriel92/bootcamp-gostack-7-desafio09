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
    box-shadow: 5px 5px 4px -5px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(203, 73, 73, 0.2);
    background: #cb4949;
    padding: 20px 30px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 7px;
      color: #fff;
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

  button {
    margin: 0;
  }
`
