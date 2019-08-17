import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  form {
    width: 768px;
    margin: auto;
    display: flex;
    flex-direction: column;

    h3 {
      margin: 20px 0;
    }

    & > div {
      margin-bottom: 10px;
    }

    button {
      flex: 1;
    }
  }
`
