import React from 'react'
import PropTypes from 'prop-types'
import { formatRelative, parseISO } from 'date-fns'
import { Container, Info } from './styles'
import noBanner from '../../assets/no-banner.png'

function MeetUp({ meetup }) {
  return (
    <Container>
      <img
        src={meetup.banner ? meetup.banner.path : noBanner}
        alt={meetup.title}
      />
      <Info>
        <div>
          <strong>{meetup.title}</strong>
          <small>{formatRelative(parseISO(meetup.date), new Date())}</small>
        </div>
        <div>
          <p>{meetup.description}</p>
        </div>
      </Info>
    </Container>
  )
}

MeetUp.propTypes = {
  meetup: PropTypes.shape().isRequired,
}

export default MeetUp
