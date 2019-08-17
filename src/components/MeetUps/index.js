import styled from 'styled-components'

export default styled.ul`
  width: 896px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 20px 0;

  li {
    h2 {
      font-size: 16px;
    }
  }
`
