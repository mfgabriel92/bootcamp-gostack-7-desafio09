import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Wrapper, Container, User } from './styles'
import logo from '../../assets/logo-white-horizontal.png'
import noImage from '../../assets/no-user.png'

function Header() {
  const me = useSelector(state => state.user.me)

  return (
    <Wrapper>
      <Container>
        <Link to="/dashboard">
          <img src={logo} alt="MeepApp Dashboard" />
        </Link>
        <User>
          <strong>
            {me.first_name} {me.last_name}
          </strong>
          <img src={noImage} alt="" />
        </User>
      </Container>
    </Wrapper>
  )
}

export default Header
