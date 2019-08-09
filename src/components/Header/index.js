import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  FaUser,
  FaCalendarCheck,
  FaDoorOpen,
  FaPlusSquare,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ButtonLink from '../ButtonLink'
import { Container, Actions, User, Menu, Separator } from './styles'
import logo from '../../assets/logo-icon-white.png'
import noImage from '../../assets/no-user.png'

function Header() {
  const [showing, setShowing] = useState(false)
  const me = useSelector(state => state.user.me)

  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="MeepApp Dashboard" />
      </Link>
      <Actions>
        <ButtonLink
          to="/new"
          icon={FaPlusSquare}
          iconSize={16}
          bgcolor="#6414f7"
        />
        <User onClick={() => setShowing(!showing)}>
          <img src={noImage} alt="" />
          <Menu showing={showing} onMouseLeave={() => setShowing(false)}>
            <li>
              <Link to="/profile">
                <FaUser size={18} color="#fff" /> {me.first_name} {me.last_name}
              </Link>
            </li>
            <li>
              <Link to="/my-meetups">
                <FaCalendarCheck size={18} color="#fff" /> My Meetups
              </Link>
            </li>
            <Separator />
            <li>
              <Link to="/">
                <FaDoorOpen size={18} color="#fff" /> Logoff
              </Link>
            </li>
          </Menu>
        </User>
      </Actions>
    </Container>
  )
}

export default Header
