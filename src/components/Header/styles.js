import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.header`
  background: #f7f7f7;
  border-bottom: 1px solid #f0f0f0;
  height: 70px;
  width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  img {
    width: 135px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Right = styled.div`
  display: flex;

  & > a {
    height: auto;
    padding: 0 15px;
  }
`

export const User = styled.div`
  transition: background 0.2s;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 20px;

  img {
    width: 40px;
    border-radius: 50%;
  }

  div {
    display: flex;
    margin-right: 20px;
    flex-direction: column;

    a {
      font-weight: bold;
      color: #333;
      transition: color 0.2s;

      &:hover {
        color: #ca3201;
      }
    }

    button {
      background: transparent;
      color: #d99556;
      font-size: 12px;
      margin: 0;
      padding: 0;
      padding-top: 7px;
      height: auto;
      transition: color 0.2s;
      font-weight: normal;

      &:hover {
        background: transparent;
        color: #ca3201;
      }
    }
  }
`

export const Menu = styled.ul`
  display: flex;

  li {
    a {
      color: #333;
      display: flex;
      align-items: center;
      padding: 15px;
      height: 100%;
      margin: 0;

      svg {
        margin-right: 7px;
      }
    }

    &:hover {
      background: ${lighten(0.1, 'rgba(217, 148, 85, 0.23)')};
    }
  }
`
