import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    svg {
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: #cb4949 !important;
        transform: scale(1.15, 1.15);
      }

      &:nth-of-type(1) {
        margin-right: 15px;
      }

      &:nth-of-type(2) {
        margin-left: 15px;
      }
    }
  }

  button {
    margin-bottom: 50px;
    background: transparent;
    border: 0;
    transition: all 0.2s;

    &:hover {
      color: #cb4949 !important;
      transform: scale(1.15, 1.15);
    }
  }
`

export const Meetups = styled.ul`
  width: 896px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 20px 0;
`

export const LoadingWrapper = styled(Meetups)`
  display: flex;

  .ph-item {
    width: 512px;
    padding: 0;
    background: linear-gradient(
      135deg,
      rgba(125, 143, 206, 0.17),
      rgba(131, 139, 219, 0.14)
    );
    opacity: 0.1;

    div {
      padding: 0;
    }

    .ph-picture {
      height: 256px;
    }

    .ph-row {
      padding: 20px;
    }
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px !important;

    .ph-avatar {
      width: 25px !important;
      min-width: 25px !important;
      height: 25px !important;
      margin-left: auto;
      margin-right: 10px;
    }
  }
`
