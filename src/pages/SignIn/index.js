import React from 'react'
import { FaEnvelopeOpen, FaUnlockAlt, FaCheckCircle } from 'react-icons/fa'
import { Form } from '@rocketseat/unform'
import Input from '../../components/Input'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'

function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" width="130px" />
      <Form onSubmit={() => {}}>
        <Input
          icon={FaEnvelopeOpen}
          iconSize={18}
          name="email"
          type="email"
          placeholder="example@email.com"
        />
        <Input
          icon={FaUnlockAlt}
          iconSize={18}
          name="password"
          type="password"
          placeholder="**********"
        />
        <Button
          icon={FaCheckCircle}
          iconSize={18}
          text="Login"
          bgColor="#139187"
        />
      </Form>
    </>
  )
}

export default SignIn
