import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import '../../node_modules/placeholder-loading/src/scss/placeholder-loading.scss'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
    background: linear-gradient(135deg,#d99556,#ca3201);
  }

  body, input, textarea, button {
    font: 14px 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1 {
    letter-spacing: 1.1px;
    font-weight: 100;
    
    span {
      font-weight: bold;
      margin-left: 7px;
    }
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  .ph-picture, .ph-avatar, .ph-row > * {
    background: #ececec !important;
  }
`
