import React from 'react'
import PropTypes from 'prop-types'
import { FaCalendar } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import { Container, Info, Title, Description, User } from './styles'
import noImage from '../../assets/no-user.png'

function MeetUp({ meetup }) {
  return (
    <Container>
      <strong>
        <FaCalendar size={16} />
        {format(parseISO(meetup.date), 'H:mm a')}
      </strong>
      {meetup.banner && <img src={meetup.banner.path} alt={meetup.title} />}
      <Info>
        <Title>{meetup.title}</Title>
        <Description>{meetup.description}</Description>
        <User>
          <img
            src={meetup.user.avatar ? meetup.user.avatar.path : noImage}
            alt={meetup.user.first_name}
          />
          {meetup.user.first_name} {meetup.user.last_name}
        </User>
      </Info>
    </Container>
  )
}

MeetUp.propTypes = {
  meetup: PropTypes.shape().isRequired,
}

export default MeetUp
