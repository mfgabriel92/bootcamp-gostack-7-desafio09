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
    margin: auto;
    margin-top: 50px;
    width: 920px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #464e6a;
    box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
    padding: 30px 40px;
    border-radius: 8px;

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 7px;
      margin-top: 12px;
      color: #fcfcfc;
    }

    textarea {
      width: 100%;
      min-height: 100px;
      padding-top: 10px;
    }

    button {
      margin-top: 30px !important;
      margin: 0;
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
