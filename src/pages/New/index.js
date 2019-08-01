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
          iconColor="#171618"
          name="title"
          placeholder="Title of the event"
        />
        <Textarea
          label="Description *"
          icon={FaPencilAlt}
          iconSize={18}
          iconColor="#171618"
          name="description"
          placeholder="Description of the event"
        />
        <DateLocation>
          <DateInput label="Date *" name="date" />
          <Input
            label="Location *"
            icon={FaMapMarkedAlt}
            iconSize={18}
            iconColor="#171618"
            name="location"
            placeholder="Specify the location"
          />
        </DateLocation>
        <Buttons>
          <Button
            icon={FaEraser}
            iconSize={18}
            iconColor="#fff"
            text="Clear Form"
            bgColor="#cecece"
          />
          <Button
            icon={FaCheckSquare}
            iconSize={18}
            text="Create Event"
            bgColor="#171618"
          />
        </Buttons>
      </Form>
    </Container>
  )
}

export default New
