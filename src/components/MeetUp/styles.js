import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
  width: 920px;
  border: 1px solid #f0f0f0;
  box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.1);
`

export const Info = styled.div`
  height: 130px;
  padding: 25px;
  color: #7e7488;
  display: flex;

  svg {
    margin-right: 7px;
  }

  div {
    &:nth-of-type(1) {
      width: 25%;
      padding-right: 30px;
      margin-right: 30px;
      border-right: 1px solid #ddd;

      strong {
        display: block;
        font-size: 26px;
        max-lines: 1;
      }

      small {
        font-size: 13px;
        margin-top: 7px;
        display: flex;
        align-items: center;
      }
    }

    &:nth-of-type(2) {
      width: 50%;
      max-lines: 4;
      padding-right: 30px;
      margin-right: 30px;
      border-right: 1px solid #ddd;
    }

    &:nth-of-type(3) {
      strong {
        display: flex;
        align-items: center;
      }
    }
  }
`
