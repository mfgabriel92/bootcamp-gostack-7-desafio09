import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Wrapper = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  height: 72px;
  background: #cb4949;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.3);
`

export const Container = styled.div`
  min-width: 1280px;
  height: 100%;
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

  > div {
    display: flex;

    a {
      margin-right: 20px;
      font-weight: bold;
    }
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  transition: background 0.2s;
  cursor: pointer;
  position: relative;

  strong {
    color: #fff;
    font-size: 16px;
    transition: background 0.2s;
    margin-right: 15px;
  }

  img {
    width: 40px;
    border-radius: 50%;
  }

  &:hover {
    background: ${darken(0.07, '#cb4949')};
  }
`

export const Menu = styled.ul`
  position: absolute;
  z-index: 10;
  right: 0;
  width: 250px;
  height: 100px;
  background: #171618;
  top: 90px;
  display: ${props => !props.showing && 'none'};

  li {
    a {
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;
      padding: 15px;
      height: 100%;

      svg {
        margin-right: 15px;
      }
    }

    &:hover {
      background: ${lighten(0.1, '#171618')};
    }
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #171618;
    position: absolute;
    right: 15px;
    top: -15px;
  }
`

export const Separator = styled.li`
  height: 1px;
  margin: 0 15px;
  background: #cb4949;
`
