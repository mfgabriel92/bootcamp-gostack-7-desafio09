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
`

export const Meetups = styled.ul`
  width: 896px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 30px;
  padding: 20px 0;
`
