import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

export const Container = styled.div`
  padding: 100px 0;
  max-width: 1280px;
  margin: 0 auto;
  color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 34px;
    text-shadow: 3px 3px 5px black;
  }
`
