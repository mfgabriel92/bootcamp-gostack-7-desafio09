import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelopeOpen, FaUnlockAlt, FaCheckCircle } from 'react-icons/fa'
import { Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import logo from '../../assets/logo.png'
import schema from '../../utils/validations/signin'

function SignIn() {
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
        <Link to="/signup">No account? Create one</Link>
      </Form>
    </>
  )
}

export default SignIn
