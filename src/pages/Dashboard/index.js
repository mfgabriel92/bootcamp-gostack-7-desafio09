import React, { useState, useEffect, useMemo } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { format, addDays, subDays, isToday } from 'date-fns'
import api from '../../services/api'
import MeetUp from '../../components/MeetUp'
import { Container, Meetups } from './styles'
import MeetupPlaceholder from '../../components/MeetupPlaceholder'

function Dashboard() {
  const [date, setDate] = useState(new Date())
  const [meetups, setMeetups] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const formattedDate = useMemo(() => format(date, "do 'of' MMMM"), [date])

  useEffect(() => {
    setIsLoading(true)
    async function fetchMeetups() {
      const { data } = await api.get('meetups', {
        params: {
          date: format(date, 'yyyy-MM-dd'),
          page,
        },
      })

      setMeetups(data.meetups)
      setIsLoading(false)
    }

    fetchMeetups()
  }, [page, date])

  function decreaseDate() {
    setDate(subDays(date, 1))
  }

  function increaseDate() {
    setDate(addDays(date, 1))
  }

  function goToToday() {
    setDate(new Date())
  }

  async function handleCancelEvent(id) {
    await api.delete(`/meetups/${id}`)
  }

  function renderEvents() {
    if (isLoading) {
      return <MeetupPlaceholder />
    }

    if (!isLoading && meetups.length === 0) {
      return <h4>No events for {!isToday(date) ? 'that day' : 'today'}</h4>
    }

    return (
      <Meetups>
        {meetups.map(meetup => (
          <MeetUp
            key={meetup.id}
            meetup={meetup}
            onCancel={handleCancelEvent}
          />
        ))}
      </Meetups>
    )
  }

  return (
    <Container>
      <h1>
        <FaChevronLeft size={16} color="#000" onClick={decreaseDate} />
        Meet-ups on the <span>{formattedDate}</span>
        <FaChevronRight size={16} color="#000" onClick={increaseDate} />
      </h1>
      <button
        type="button"
        onClick={() => goToToday()}
        disabled={isToday(date)}
      >
        Today
      </button>
      {renderEvents()}
    </Container>
  )
}

export default Dashboard
