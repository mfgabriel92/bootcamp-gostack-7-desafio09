import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from '@rocketseat/unform'
import {
  FaCalendarAlt,
  FaPencilAlt,
  FaCheckSquare,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Container, DateLocation } from './styles'
import { createMeetup } from '../../store/meetup/actions'
import Dropzone from '../../components/Dropzone'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import schema from '../../utils/validations/new'

function New() {
  const [date, setDate] = useState(new Date())
  const [banner, setBanner] = useState([])
  const { isLoading } = useSelector(state => state.meetup)
  const dispatch = useDispatch()

  async function validateForm(data) {
    try {
      await schema.validate(data, { abortEarly: false })
      const { title, description, location } = data
      dispatch(createMeetup(title, description, date, location, banner[0]))
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    }
  }

  return (
    <Container>
      <h1>
        New <span>meet-up event</span>
      </h1>
      <Form onSubmit={validateForm}>
        <Dropzone accept="image/*" onDropAccepted={setBanner} />

        <Input
          label="Event title *"
          icon={FaCalendarAlt}
          iconSize={18}
          iconColor="#fcfcfc"
          name="title"
          placeholder="Title of the event"
        />
        <Textarea
          label="Description *"
          icon={FaPencilAlt}
          iconSize={18}
          iconColor="#fcfcfc"
          name="description"
          placeholder="Description of the event"
        />
        <DateLocation>
          <DateInput
            label="Date *"
            name="date"
            borderColor="#fcfcfc"
            value={date}
            onChange={setDate}
          />
          <Input
            label="Location *"
            icon={FaMapMarkedAlt}
            iconSize={18}
            iconColor="#fcfcfc"
            name="location"
            placeholder="Specify the location"
          />
        </DateLocation>
        <Button
          icon={FaCheckSquare}
          iconSize={18}
          text="Create Event"
          bgcolor="#6414f7"
          isLoading={isLoading}
        />
      </Form>
    </Container>
  )
}

export default New
