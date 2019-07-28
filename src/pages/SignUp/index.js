import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaUserAlt,
  FaEnvelopeOpen,
  FaUnlockAlt,
  FaPlusCircle,
} from 'react-icons/fa'
import { Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import logo from '../../assets/logo.png'
import schema from '../../utils/validations/signup'

function SignUp() {
  async function validateForm(data) {
    try {
      await schema.validate(data, { abortEarly: false })
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    }
  }

  return (
    <>
      <img src={logo} alt="MeetApp" width="130px" />
      <Form onSubmit={validateForm}>
        <Input
          icon={FaUserAlt}
          iconSize={18}
          name="first_name"
          placeholder="John"
        />
        <Input
          icon={FaUserAlt}
          iconSize={18}
          name="last_name"
          placeholder="Doe"
        />
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
        <Input
          icon={FaUnlockAlt}
          iconSize={18}
          name="confirmPassword"
          type="password"
          placeholder="**********"
        />
        <Button
          icon={FaPlusCircle}
          iconSize={18}
          text="Register"
          bgColor="#139187"
        />
        <Link to="/">Have an account? Login now</Link>
      </Form>
    </>
  )
}

export default SignUp
