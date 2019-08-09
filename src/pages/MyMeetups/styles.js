import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    letter-spacing: 1.1px;
    font-weight: 100;
    margin-bottom: 20px;
  }
`

export const Meetups = styled.ul`
  width: 896px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 15px 0;

  li {
    h2 {
      font-size: 16px;
    }
  }
`
export const LoadingWrapper = styled(Meetups)`
  display: flex;

  .ph-item {
    width: 278px;
    padding: 0;

    div {
      padding: 0;
    }

    .ph-picture {
      height: 168px;
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
