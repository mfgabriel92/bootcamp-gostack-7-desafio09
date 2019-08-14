import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { FaHome } from 'react-icons/fa'
import api from '../../services/api'
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
import DetailPlaceholder from '../../components/DetailPlaceholder'
import noBanner from '../../assets/no-banner.png'
import noImage from '../../assets/no-user.png'

function Detail({ match }) {
  const [meetup, setMeetup] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchDetails() {
      const { data } = await api.get(`/meetups/${match.params.id}`)
      setMeetup(data.meetup)
      setIsLoading(false)
    }

    fetchDetails()
  }, [match.params.id])

  if (isLoading) {
    return <DetailPlaceholder />
  }

  return (
    <Container>
      <Banner bgimage={meetup.banner ? meetup.banner.path : noBanner} />
      <Info>
        <Title>{meetup.title.substring(0, 25)}</Title>
        <Location>
          <FaHome size={16} /> {meetup.location}
        </Location>
        <Description>
          &quot;{meetup.description.substring(0, 128)}&quot;
        </Description>
        <Date>
          {format(parseISO(meetup.date), "MMMM do, yyyy ' | ' h:mm a")}
        </Date>
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
    </Container>
  )
}

export default Detail
