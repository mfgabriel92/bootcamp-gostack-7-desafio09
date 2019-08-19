import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
    letter-spacing: 1.1px;
    font-weight: 100;
    display: inherit;

    span {
      font-weight: bold;
    }
  }

  form {
    background: #fff;
    padding: 20px 30px;
    width: 100%;
    max-width: 768px;
    border: 1px solid #f7f7f7;
    margin: auto;

    & > div {
      margin-bottom: 18px;
    }

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 7px;
      margin-top: 12px;
      color: #333;
      text-align: left;
    }

    textarea {
      width: 100%;
      min-height: 100px;
      padding-top: 10px;
    }

    button {
      margin-top: 30px;
      margin-left: auto;
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
