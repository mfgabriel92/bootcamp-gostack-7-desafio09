import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from '@rocketseat/unform'
import {
  FaCalendarAlt,
  FaPencilAlt,
  FaCheckSquare,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { parseISO } from 'date-fns'
import { Container, DateLocation } from './styles'
import { fetchMeetup, createUpdateMeetup } from '../../store/meetup/actions'
import DetailPlaceholder from '../../components/DetailPlaceholder'
import Dropzone from '../../components/Dropzone'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import schema from '../../utils/validations/new'

function New({ match }) {
  const { meetup, isLoading } = useSelector(state => state.meetup)
  const [date, setDate] = useState(new Date())
  const [banner, setBanner] = useState([])
  const dispatch = useDispatch()
  const { id } = match.params

  useEffect(() => {
    if (id) {
      dispatch(fetchMeetup(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (meetup) {
      setDate(parseISO(meetup.date))
    }
  }, [meetup])

  async function validateForm(data) {
    try {
      await schema.validate(data, { abortEarly: false })
      const { title, description, location } = data
      dispatch(
        createUpdateMeetup(id, title, description, date, location, banner[0])
      )
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    }
  }

  if (isLoading) return <DetailPlaceholder />

  return (
    <Container>
      <h1>
        {id ? 'Update' : 'New'} <span>meet-up event</span>
      </h1>
      <Form initialData={meetup} onSubmit={validateForm}>
        <Dropzone accept="image/*" onDropAccepted={setBanner} />

        <Input
          label="Event title *"
          icon={FaCalendarAlt}
          iconSize={18}
          iconColor="#2d3450"
          name="title"
          placeholder="Title of the event"
        />
        <Textarea
          label="Description *"
          icon={FaPencilAlt}
          iconSize={18}
          iconColor="#2d3450"
          name="description"
          value={meetup && meetup.description}
          placeholder="Description of the event"
        />
        <DateLocation>
          <DateInput
            label="Date *"
            name="date"
            borderColor="#2d3450"
            value={date}
            onChange={setDate}
          />
          <Input
            label="Location *"
            icon={FaMapMarkedAlt}
            iconSize={18}
            iconColor="#2d3450"
            name="location"
            placeholder="Specify the location"
          />
        </DateLocation>
        <Button
          icon={FaCheckSquare}
          iconSize={18}
          text={`${id ? 'Update' : 'Create'} meetup`}
          isLoading={isLoading}
        />
      </Form>
    </Container>
  )
}

export default New
