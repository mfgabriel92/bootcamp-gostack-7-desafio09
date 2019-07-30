import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import api from '../../services/api'
import MeetUp from '../../components/MeetUp'
import { Container, Meetups } from './styles'

function Dashboard() {
  const [meetups, setMeetups] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchMeetups() {
      const { data } = await api.get('meetups', {
        params: {
          date: format(new Date(), 'yyyy-MM-dd'),
          page,
        },
      })

      setMeetups(data.meetups)
    }

    fetchMeetups()
  }, [page])

  return (
    <Container>
      <h1>
        Meet-ups today, <span>{format(new Date(), "do 'of' MMMM")}</span>
      </h1>
      <Meetups>
        {meetups.map(meetup => (
          <MeetUp meetup={meetup} />
        ))}
      </Meetups>
    </Container>
  )
}

export default Dashboard
