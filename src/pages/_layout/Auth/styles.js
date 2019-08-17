import styled from 'styled-components'
import bg from '../../../assets/bg.png'

export const Wrapper = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat fixed center;
`

export const Content = styled.div`
  background: #ffffff;
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

    a {
      font-size: 13px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    button {
      margin-top: 10px;
    }
  }
`
