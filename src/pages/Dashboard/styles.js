import styled from 'styled-components'

export const Container = styled.div`
  width: 1280px;
  margin: auto;
  height: 100vh;
  text-align: center;

  h1 {
    span {
      margin-left: 5px;
    }

    svg {
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: #ca3201 !important;
        transform: scale(1.15, 1.15);
      }

      &:nth-of-type(1) {
        margin-right: 15px;
      }

      &:nth-of-type(2) {
        margin-left: 15px;
      }
    }
  }

  button {
    margin-bottom: 50px;
    background: transparent;
    border: 0;
    transition: all 0.2s;
    color: #333;

    &:hover {
      transform: scale(1.15, 1.15);
      color: #ca3201 !important;
    }
  }
`

export const Meetups = styled.ul`
  width: 896px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 20px 0;
`
