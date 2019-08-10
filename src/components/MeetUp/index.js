import React, { useMemo } from 'react'
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

function MeetUp({ size, meetup }) {
  const formattedDate = useMemo(
    () => format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a"),
    [meetup.date]
  )

  return (
    <Container isPast={meetup.past}>
      <Link to={`/meetups/${meetup.id}`}>
        {meetup.past && <Ribbon>Done</Ribbon>}
        <Banner
          size={size}
          bgimage={meetup.banner ? meetup.banner.path : noBanner}
        />
        <Info>
          <Title>{meetup.title.substring(0, 25)}</Title>
          <Location>
            <FaHome size={16} /> {meetup.location}
          </Location>
          <Description>
            &quot;{meetup.description.substring(0, 128)}&quot;
          </Description>
          <Date>{formattedDate}</Date>
        </Info>
        <User>
          <img
            src={meetup.user.avatar ? meetup.user.avatar.path : noImage}
            alt={meetup.user.first_name}
          />
          <p>
            {meetup.user.first_name} {meetup.user.last_name}
          </p>
        </User>
      </Link>
    </Container>
  )
}

MeetUp.propTypes = {
  size: PropTypes.string,
  meetup: PropTypes.shape().isRequired,
}

MeetUp.defaultProps = {
  size: 'default',
}

export default MeetUp
