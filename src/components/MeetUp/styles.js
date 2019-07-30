import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
  width: 920px;
  background: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: 5px 5px 4px -5px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(203, 73, 73, 0.2);

  > strong {
    position: absolute;
    right: 5px;
    top: -25px;
    background: #cb4949;
    color: #fff;
    padding: 7px 14px;
    display: flex;
    border-radius: 50px;

    svg {
      margin-right: 10px;
    }
  }
`

export const Info = styled.div`
  padding: 25px;
  color: #7e7488;
  display: flex;
  align-items: center;

  svg {
    margin-right: 7px;
  }

  div {
    height: 100%;
  }
`

export const Title = styled.h3`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 23px;
  max-lines: 1;
  padding-right: 30px;
  margin-right: 30px;
  border-right: 1px solid #ddd;
`

export const Description = styled.p`
  display: flex;
  height: 100%;
  align-items: center;
  max-lines: 4;
  padding-right: 30px;
  margin-right: 30px;
`

export const User = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;

  img {
    border-radius: 50%;
    width: 30px;
    margin-right: 10px;
  }

  strong {
    display: flex;
    align-items: center;
  }
`
