import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  background: #464e6a;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  a {
    color: #fcfcfc;
  }

  &:hover {
    transform: scale(1.02, 1.02);
    box-shadow: 1px 0px 15px 5px rgba(0, 0, 0, 0.06);
    background: ${lighten(0.05, '#464e6a')};
  }
`

export const Actions = styled.div`
  position: absolute;
  padding: 10px;
  top: 5px;
  right: 0px;

  button {
    background: #464e6a !important;
    padding: 10px 10px 4px 10px;
    border-radius: 4px;
    transition: all 0.2s;
    box-shadow: 2px 2px 1px 0px #333;
    margin-right: 5px;
    border: none;

    &:hover {
      background: ${darken(0.1, '#464e6a')};
      transform: scale(1.15, 1.15);
    }
  }
`

export const Banner = styled.div`
  height: ${props => (props.size === 'small' ? '168px' : '256px')};
  background: url(${props => props.bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

export const Info = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #61677e;
  margin: 0 20px;
  min-height: 230px;
  justify-content: space-between;
`

export const Title = styled.h2`
  display: block;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 13px;
`

export const Location = styled.p`
  display: block;
  font-size: 13px;
  display: flex;
  align-items: center;
  opacity: 0.8;

  svg {
    margin-right: 7px;
  }
`

export const Description = styled.p`
  display: block;
  font-style: italic;
  font-size: 14px;
  margin-top: 35px;
`

export const Date = styled.p`
  display: block;
  font-size: 14px;
  margin-top: 25px;
  font-weight: 500;
  opacity: 0.4;

  svg {
    margin-right: 7px;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;

  img {
    width: 25px;
    border-radius: 50%;
  }

  p {
    font-size: 12px;
    margin-left: 10px;
  }
`

export const Ribbon = styled.div`
  top: -10px;
  right: -10px;
  overflow: hidden;

  &&::before,
  &&::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid ${darken(0.1, '#6414f7')};
    border-top-color: transparent;
    border-right-color: transparent;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  top: 11px;
  right: -45px;
  position: absolute;
  width: 150px;
  padding: 10px 0px;
  background-color: #6414f7;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  transform: rotate(45deg);
`
