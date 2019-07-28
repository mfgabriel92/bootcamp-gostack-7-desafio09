import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  height: 64px;
  background: linear-gradient(90deg, #26a6bd, #139187);
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.3);
`

export const Container = styled.div`
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 150px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #fff;
    font-size: 16px;
    margin-right: 15px;
  }

  img {
    width: 40px;
    border-radius: 50%;
  }
`
