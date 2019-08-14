import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;

  .ph-item {
    width: 896px;
    padding: 0;
    border: 0;
    margin: auto;

    div {
      padding: 0;
    }

    .ph-picture {
      height: 256px;
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
