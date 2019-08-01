import React, { useState, useEffect, useMemo } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { format, addDays, subDays } from 'date-fns'
import api from '../../services/api'
import MeetUp from '../../components/MeetUp'
import { Container, Meetups } from './styles'
import LoadingPlaceholder from './LoadingPlaceholder'

function Dashboard() {
  const [date, setDate] = useState(new Date())
  const [meetups, setMeetups] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const formattedDate = useMemo(() => format(date, "do 'of' MMMM"), [date])

  function decreaseDate() {
    setDate(subDays(date, 1))
  }
  function increaseDate() {
    setDate(addDays(date, 1))
  }

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

  return (
    <Container>
      <h1>
        <FaChevronLeft size={28} color="#171618" onClick={decreaseDate} />
        Meet-ups today, <span>{formattedDate}</span>
        <FaChevronRight size={28} color="#171618" onClick={increaseDate} />
      </h1>
      {isLoading ? (
        <LoadingPlaceholder />
      ) : (
        <Meetups>
          {meetups.map(meetup => (
            <MeetUp key={meetup.id} meetup={meetup} />
          ))}
        </Meetups>
      )}
    </Container>
  )
}

export default Dashboard
