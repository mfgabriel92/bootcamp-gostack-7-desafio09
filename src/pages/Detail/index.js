import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format, parseISO } from 'date-fns'
import {
  FaHome,
  FaCheckCircle,
  FaPenAlt,
  FaCalendarMinus,
} from 'react-icons/fa'
import api from '../../services/api'
import {
  Container,
  Banner,
  Info,
  Title,
  Location,
  Description,
  Date,
  Footer,
  Actions,
  User,
  Ribbon,
} from './styles'
import { attendMeetup, cancelMeetup } from '../../store/meetup/actions'
import DetailPlaceholder from '../../components/DetailPlaceholder'
import Button from '../../components/Button'
import ButtonLink from '../../components/ButtonLink'
import noBanner from '../../assets/no-banner.png'
import noImage from '../../assets/no-user.png'

function Detail({ match }) {
  const [meetup, setMeetup] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const me = useSelector(state => state.user.me)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchDetails() {
      const { data } = await api.get(`/meetups/${match.params.id}`)
      setMeetup(data.meetup)
      setIsLoading(false)
    }

    fetchDetails()
  }, [match.params.id])

  function renderActions() {
    const isMyMeetup = meetup.user.id === me.id

    if (!isMyMeetup && !meetup.past) {
      return (
        <Button
          type="button"
          icon={FaCheckCircle}
          text="I want to attend!"
          onClick={() => dispatch(attendMeetup(meetup.id))}
        />
      )
    }

    if (isMyMeetup && !meetup.past) {
      return (
        <>
          <ButtonLink
            to={`/meetups/${meetup.id}/edit`}
            type="button"
            icon={FaPenAlt}
            iconSize={12}
            text="Edit"
          />
          <Button
            type="button"
            icon={FaCalendarMinus}
            iconSize={12}
            text="Cancel Event"
            onClick={() => dispatch(cancelMeetup(meetup.id))}
          />
        </>
      )
    }

    return ''
  }

  if (isLoading) {
    return <DetailPlaceholder />
  }

  return (
    <Container>
      {meetup.past && <Ribbon>Done</Ribbon>}
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
      <Footer>
        <Actions>{renderActions()}</Actions>
        <User>
          <img
            src={meetup.user.avatar ? meetup.user.avatar.path : noImage}
            alt={meetup.user.first_name}
          />
          <p>
            {meetup.user.first_name} {meetup.user.last_name}
          </p>
        </User>
      </Footer>
    </Container>
  )
}

export default Detail
