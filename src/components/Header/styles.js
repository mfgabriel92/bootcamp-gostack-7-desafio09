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

export const User = styled.div`
  transition: background 0.2s;
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    border-radius: 50%;
  }

  a {
    margin-right: 15px;
    font-weight: bold;
    color: #303855;

    &:nth-of-type(1) {
      color: #fff;
      padding: 10px 20px;
      background: linear-gradient(135deg, #d99556, #ca3201);
      transition: background 0.2s;

      &:hover {
        background: linear-gradient(135deg, #eab584, #ec693f);
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
