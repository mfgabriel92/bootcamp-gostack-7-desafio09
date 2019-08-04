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
import { Wrapper, Container, User, Menu, Separator } from './styles'
import logo from '../../assets/logo-white-horizontal.png'
import noImage from '../../assets/no-user.png'

function Header() {
  const [showing, setShowing] = useState(false)
  const me = useSelector(state => state.user.me)

  return (
    <Wrapper>
      <Container>
        <Link to="/dashboard">
          <img src={logo} alt="MeepApp Dashboard" />
        </Link>
        <div>
          <ButtonLink
            to="/new"
            icon={FaPlusSquare}
            iconSize={18}
            text="New Event"
            bgcolor="#171618"
          />
          <User onClick={() => setShowing(!showing)}>
            <strong>
              {me.first_name} {me.last_name}
            </strong>
            <img src={noImage} alt="" />
            <Menu showing={showing} onMouseLeave={() => setShowing(false)}>
              <li>
                <Link to="/profile">
                  <FaUser size={18} color="#fff" /> Profile
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
        </div>
      </Container>
    </Wrapper>
  )
}

export default Header
