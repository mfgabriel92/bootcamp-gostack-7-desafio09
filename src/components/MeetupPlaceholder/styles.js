import styled from 'styled-components'

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
    border: 0;

    div {
      padding: 0;
    }

    .ph-picture {
      height: 168px;
    }

    .ph-row {
      padding: 10px;
    }
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px !important;

    .ph-avatar {
      width: 25px !important;
      min-width: 25px !important;
      height: 25px !important;
      margin-left: auto;
      margin-right: 10px;
    }
  }
`
