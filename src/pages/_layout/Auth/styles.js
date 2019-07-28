import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #26a6bd, #139187);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background: #fff;
  padding: 20px 30px;
  width: 100%;
  max-width: 415px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    & > div {
      margin-bottom: 10px;
    }

    div {
      background: rgba(0, 0, 0, 0.6);
      border: 0;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        margin-right: 15px;
      }

      input {
        background: none;
        border: 0;
        color: #fff;
        font-weight: bold;
        flex: 1;
        height: 100%;

        &::placeholder {
          color: #fff;
        }
      }
    }

    span {
      color: #fff;
      flex: 1;
      margin-bottom: 10px;
      background: #ff8f8f;
      padding: 3px 10px;
      margin-top: -10px;
    }

    a {
      color: #333;
      font-size: 13px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
