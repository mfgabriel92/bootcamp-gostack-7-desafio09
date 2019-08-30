import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  FaHome,
  FaPlusCircle,
  FaCalendarAlt,
  FaCalendarDay,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, Right, User, Menu } from './styles'
import { logoff } from '../../store/auth/actions'
import ButtonLink from '../ButtonLink'
import Button from '../Button'
import logo from '../../assets/logo-horizontal.png'
import noImage from '../../assets/no-user.png'

function Header() {
  const [showing, setShowing] = useState(false)
  const me = useSelector(state => state.user.me)
  const dispatch = useDispatch()

  console.log(me)

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
      <Right>
        <ButtonLink
          to="/meetups/create"
          text="Create meet-up"
          icon={FaPlusCircle}
          iconSize={16}
        />
        <User onClick={() => setShowing(!showing)}>
          <div>
            <Link to="/profile">
              {me.first_name} {me.middle_name} {me.last_name}
            </Link>
            <Button
              type="button"
              text="Logoff"
              onClick={() => dispatch(logoff())}
            />
          </div>
          <img src={me.avatar ? me.avatar.path : noImage} alt="" />
        </User>
      </Right>
    </Container>
  )
}

export default Header
