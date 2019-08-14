import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  FaHome,
  FaPlusCircle,
  FaCalendarAlt,
  FaCalendarDay,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, User, Menu } from './styles'
import ButtonLink from '../ButtonLink'
import logo from '../../assets/logo-horizontal.png'
import noImage from '../../assets/no-user.png'

function Header() {
  const [showing, setShowing] = useState(false)
  const me = useSelector(state => state.user.me)

  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="MeepApp Dashboard" />
      </Link>
      <Menu showing={showing} onMouseLeave={() => setShowing(false)}>
        <li>
          <Link to="/">
            <FaHome size={15} color="#333" /> Home
          </Link>
        </li>
        <li>
          <Link to="/meetups/my">
            <FaCalendarAlt size={15} color="#333" /> My Meet-ups
          </Link>
        </li>
        <li>
          <Link to="/meetups/attending">
            <FaCalendarDay size={15} color="#333" /> Meet-ups I&apos;m going
          </Link>
        </li>
      </Menu>
      <User onClick={() => setShowing(!showing)}>
        <ButtonLink
          to="/meetups/create"
          text="Create meet-up"
          icon={FaPlusCircle}
          iconSize={16}
        />
        <Link to="/profile">
          {me.first_name} {me.last_name}
        </Link>
        <img src={noImage} alt="" />
      </User>
    </Container>
  )
}

export default Header
