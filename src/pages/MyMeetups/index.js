import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Container, Meetups } from './styles'
import MeetUp from '../../components/MeetUp'
import LoadingPlaceholder from './LoadingPlaceholder'

function MyMeetups() {
  const [meetups, setMeetups] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchMeetups() {
      const { data } = await api.get('users/meetups', {
        params: {
          page,
        },
      })
      setMeetups(data.meetups)
      setIsLoading(false)
    }

    fetchMeetups()
  }, [page])

  function renderEvents() {
    if (isLoading) {
      return <LoadingPlaceholder />
    }

    return (
      <Meetups>
        {meetups.map(meetup => (
          <MeetUp key={meetup.id} meetup={meetup} size="small" />
        ))}
      </Meetups>
    )
  }

  return (
    <Container>
      <h1>
        My <span>meet-ups</span>
      </h1>
      {renderEvents()}
    </Container>
  )
}

export default MyMeetups
