import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-bottom: 3px solid #cb4949;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  opacity: ${props => (props.isPast ? 0.2 : 1)};
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02, 1.02);
    box-shadow: 1px 0px 15px 5px rgba(0, 0, 0, 0.06);
  }
`

export const Banner = styled.img`
  background: #eee;
  height: 256px;
`

export const Info = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
  margin: 0 20px;
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
  height: 100%;
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
