import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #cb4949 70%, #171618 30%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background: #171618;
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
      background: #fff;
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
        color: #171618;
        font-weight: bold;
        flex: 1;
        height: 100%;

        &::placeholder {
          color: #171618;
        }
      }
    }

    a {
      color: #fff;
      font-size: 13px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
