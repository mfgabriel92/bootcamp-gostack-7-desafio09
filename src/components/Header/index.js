import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Container, User } from './styles'
import logo from '../../assets/logo-white-horizontal.png'
import noImage from '../../assets/no-user.png'

function Header() {
  return (
    <Wrapper>
      <Container>
        <Link to="/dashboard">
          <img src={logo} alt="MeepApp Dashboard" />
        </Link>
        <User>
          <strong>Fulano de Tal</strong>
          <img src={noImage} alt="" />
        </User>
      </Container>
    </Wrapper>
  )
}

export default Header
