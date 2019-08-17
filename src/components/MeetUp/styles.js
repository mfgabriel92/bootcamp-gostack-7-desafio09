import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #f7f7f7;
  background: #fff;
  text-align: left;

  a {
    color: #333;
  }

  &:hover {
    transform: scale(1.02, 1.02);
    box-shadow: 1px 0px 15px 2px rgba(0, 0, 0, 0.06);
  }
`

export const Banner = styled.div`
  height: 209px;
  background: url(${props => props.bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

export const Info = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;
  margin: 0 20px;
  height: 214px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
`

export const Location = styled.p`
  display: block;
  font-size: 12px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  margin-top: 5px;

  svg {
    margin-right: 7px;
  }
`

export const Description = styled.p`
  display: block;
  font-style: italic;
  font-size: 14px;
  margin-top: 35px;
  line-clamp: 3;
`

export const Date = styled.p`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
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
  top: 11px;
  right: -45px;
  position: absolute;
  width: 135px;
  padding: 6px 0px;
  background: linear-gradient(135deg, #d99556, #ca3201);
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  transform: rotate(45deg);
  font-size: 12px;
`
