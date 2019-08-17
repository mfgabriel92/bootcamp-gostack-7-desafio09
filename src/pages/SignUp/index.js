import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  FaUserAlt,
  FaEnvelopeOpen,
  FaUnlockAlt,
  FaPlusCircle,
} from 'react-icons/fa'
import { Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import { signUp } from '../../store/auth/actions'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import logo from '../../assets/logo.png'
import schema from '../../utils/validations/signup'

function SignUp() {
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  async function validateForm(data) {
    try {
      await schema.validate(data, { abortEarly: false })
      dispatch(signUp(data))
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    }
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={validateForm}>
        <Input
          icon={FaUserAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="first_name"
          placeholder="First name"
        />
        <Input
          icon={FaUserAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="last_name"
          placeholder="Last name"
        />
        <Input
          icon={FaEnvelopeOpen}
          iconColor="#2d3450"
          iconSize={18}
          name="email"
          type="email"
          placeholder="E-mail address"
        />
        <Input
          icon={FaUnlockAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Input
          icon={FaUnlockAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        <Button
          icon={FaPlusCircle}
          iconSize={18}
          text="Register"
          isLoading={isLoading}
        />
        <Link to="/">Have an account? Login now</Link>
      </Form>
    </>
  )
}

export default SignUp
