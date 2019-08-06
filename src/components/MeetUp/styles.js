import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-bottom: 3px solid #cb4949;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  ${props =>
    !props.isPast &&
    css`
      &:hover {
        transform: scale(1.02, 1.02);
        box-shadow: 1px 0px 15px 5px rgba(0, 0, 0, 0.06);
      }
    `}
`

export const Banner = styled.div`
  background: #eee;
  height: 256px;
  background: url(${props => props.bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

export const Info = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
  margin: 0 20px;
  min-height: 238px;
  justify-content: space-between;
`

export const Title = styled.h2`
  display: block;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
`

export const Location = styled.p`
  display: block;
  margin-top: 10px;
  font-size: 13px;
  color: #999;
  display: flex;
  align-items: center;

  svg {
    margin-right: 7px;
  }
`

export const Description = styled.p`
  display: block;
  font-style: italic;
  font-size: 14px;
  color: #555;
  margin-top: 30px;
`

export const Date = styled.p`
  display: block;
  font-size: 14px;
  color: #555;
  margin-top: 20px;
  font-weight: 500;

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
    border: 5px solid ${darken(0.1, '#cb4949')};
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
  background-color: #cb4949;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  transform: rotate(45deg);
`
