import styled from 'styled-components'
import bg from '../../../assets/bg.png'

export const Wrapper = styled.div`
  min-height: 100vh;
  background: url(${bg}) no-repeat fixed center;
`

export const Container = styled.div`
  padding: 100px 50px;
  max-width: 1280px;
  margin: 0 auto;
  background: #fcfcfc;
  text-align: center;

  h1 {
    letter-spacing: 1.1px;
    font-weight: 100;
    margin-bottom: 20px;
  }
`
