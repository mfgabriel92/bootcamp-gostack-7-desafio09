import styled from 'styled-components'
import bg from '../../../assets/bg.png'

export const Wrapper = styled.div`
  height: 100%;
  background: url(${bg}) no-repeat fixed center;
`

export const Container = styled.div`
  padding: 100px 0;
  max-width: 1280px;
  margin: 0 auto;
  background: #fcfcfc;

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }
`
