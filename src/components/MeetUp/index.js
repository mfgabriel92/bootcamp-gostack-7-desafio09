import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import {
  Container,
  Banner,
  Info,
  Title,
  Location,
  Description,
  Date,
  User,
  Ribbon,
} from './styles'
import noBanner from '../../assets/no-banner.png'
import noImage from '../../assets/no-user.png'

function MeetUp({ meetup }) {
  const avatar = useSelector(state => state.user.me.avatar)
  const formattedDate = useMemo(
    () => format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a"),
    [meetup.date]
  )

  return (
    <Container isPast={meetup.past}>
      <Link to={`/meetups/${meetup.id}`}>
        {meetup.past && <Ribbon>Done</Ribbon>}
        <Banner bgimage={meetup.banner ? meetup.banner.path : noBanner} />
        <Info>
          <div>
            <Title>{meetup.title.substring(0, 25)}</Title>
            <Location>
              <FaHome size={16} /> {meetup.location}
            </Location>
          </div>
          <Description>
            &quot;{meetup.description.substring(0, 75)}&quot;
          </Description>
          <Date>{formattedDate}</Date>
        </Info>
        <User>
          <img
            src={avatar ? avatar.path : noImage}
            alt={meetup.user.first_name}
          />
          <p>
            {meetup.user.first_name} {meetup.user.middle_name}{' '}
            {meetup.user.last_name}
          </p>
        </User>
      </Link>
    </Container>
  )
}

MeetUp.propTypes = {
  meetup: PropTypes.shape().isRequired,
}

export default MeetUp
