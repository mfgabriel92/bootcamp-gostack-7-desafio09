import React from 'react'
import { Form } from '@rocketseat/unform'
import {
  FaCalendarAlt,
  FaPencilAlt,
  FaCheckSquare,
  FaEraser,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { Container, DateLocation, Buttons } from './styles'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'

function New() {
  return (
    <Container>
      <h1>
        New <span>Event</span>
      </h1>
      <Form onSubmit={() => {}}>
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
          <DateInput label="Date *" name="date" borderColor="#cb4949" />
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
          />
          <Button
            icon={FaCheckSquare}
            iconSize={18}
            text="Create Event"
            bgcolor="#cb4949"
          />
        </Buttons>
      </Form>
    </Container>
  )
}

export default New
