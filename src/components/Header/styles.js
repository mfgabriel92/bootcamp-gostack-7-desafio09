import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Container = styled.div`
  position: fixed;
  background: linear-gradient(
    135deg,
    rgba(78, 101, 185, 0.1),
    rgba(181, 188, 255, 0.04)
  );
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
  min-width: 80px;
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-bottom: 20px;
    border-radius: 50%;

    svg {
      margin: 0;
    }
  }
`

export const User = styled.div`
  transition: background 0.2s;
  cursor: pointer;
  position: relative;

  img {
    width: 40px;
    border-radius: 50%;
  }
`

export const Menu = styled.ul`
  position: absolute;
  z-index: 10;
  left: 80px;
  width: 250px;
  background: #171618;
  bottom: 0;
  display: ${props => !props.showing && 'none'};
  background: #353f60;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3);

  li {
    a {
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;
      padding: 15px;
      height: 100%;
      margin: 0;

      svg {
        margin-right: 15px;
      }
    }

    &:hover {
      background: ${lighten(0.1, 'rgba(125, 143, 206, 0.17)')};
    }
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #353f60;
    position: absolute;
    left: -15px;
    bottom: 10px;
  }
`

export const Separator = styled.li`
  height: 1px;
  margin: 0 15px;
  background: s;
`
