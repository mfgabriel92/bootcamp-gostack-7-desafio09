import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Container } from './styles'
import MeetUps from '../../components/MeetUps'
import MeetUp from '../../components/MeetUp'
import MeetupPlaceholder from '../../components/MeetupPlaceholder'
import Pagination from '../../components/Pagination'

function AttendingMeetups() {
  const [meetups, setMeetups] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchMeetups() {
      const { data } = await api.get('meetups/attending', {
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
      return <MeetupPlaceholder />
    }

    if (!isLoading && meetups.length === 0) {
      return <h4>Not attending any meet-ups yet</h4>
    }

    return (
      <MeetUps>
        {meetups.map(meetup => (
          <MeetUp key={meetup.id} meetup={meetup} size="small" />
        ))}
      </MeetUps>
    )
  }

  return (
    <Container>
      <h1>
        Meet-ups I am <span>going</span>
      </h1>
      {renderEvents()}
      <Pagination
        onPreviousPage={() => setPage(page - 1)}
        onNextPage={() => setPage(page + 1)}
      />
    </Container>
  )
}

export default AttendingMeetups
