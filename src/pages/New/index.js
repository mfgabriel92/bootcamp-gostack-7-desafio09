import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { parseISO, format } from 'date-fns'
import { Form } from '@rocketseat/unform'
import {
  FaCalendarAlt,
  FaPencilAlt,
  FaCheckSquare,
  FaEraser,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Container, DateLocation, Buttons } from './styles'
import { createMeetup } from '../../store/meetup/actions'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import schema from '../../utils/validations/new'

function New() {
  const [date, setDate] = useState(new Date())
  const { isLoading } = useSelector(state => state.meetup)
  const dispatch = useDispatch()

  async function validateForm(data) {
    try {
      await schema.validate(data, { abortEarly: false })
      const { title, description, location } = data
      dispatch(createMeetup(title, description, date, location))
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    }
  }

  return (
    <Container>
      <h1>
        New <span>Event</span>
      </h1>
      <Form onSubmit={validateForm}>
        <Input
          label="Event title *"
          icon={FaCalendarAlt}
          iconSize={18}
          iconColor="#cb4949"
          borderColor="#cb4949"
          name="title"
          placeholder="Title of the event"
        />
        <Textarea
          label="Description *"
          icon={FaPencilAlt}
          iconSize={18}
          iconColor="#cb4949"
          borderColor="#cb4949"
          name="description"
          placeholder="Description of the event"
        />
        <DateLocation>
          <DateInput
            label="Date *"
            name="date"
            borderColor="#cb4949"
            value={date}
            onChange={setDate}
          />
          <Input
            label="Location *"
            icon={FaMapMarkedAlt}
            iconSize={18}
            iconColor="#cb4949"
            borderColor="#cb4949"
            name="location"
            placeholder="Specify the location"
          />
        </DateLocation>
        <Buttons>
          <Button
            icon={FaEraser}
            iconSize={18}
            text="Clear Form"
            bgcolor="#cecece"
            isLoading={isLoading}
          />
          <Button
            icon={FaCheckSquare}
            iconSize={18}
            text="Create Event"
            bgcolor="#cb4949"
            isLoading={isLoading}
          />
        </Buttons>
      </Form>
    </Container>
  )
}

export default New
