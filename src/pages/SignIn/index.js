import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaEnvelopeOpen, FaUnlockAlt, FaCheckCircle } from 'react-icons/fa'
import { Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import { signIn } from '../../store/auth/actions'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import logo from '../../assets/logo.png'
import schema from '../../utils/validations/signin'

function SignIn() {
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  async function validateForm(data) {
    try {
      await schema.validate(data, { abortEarly: false })
      const { email, password } = data

      dispatch(signIn(email, password))
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    }
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={validateForm}>
        <Input
          icon={FaEnvelopeOpen}
          iconSize={18}
          iconColor="#171618"
          name="email"
          type="email"
          placeholder="example@email.com"
        />
        <Input
          icon={FaUnlockAlt}
          iconSize={18}
          iconColor="#171618"
          name="password"
          type="password"
          placeholder="**********"
        />
        <Button
          icon={FaCheckCircle}
          iconSize={18}
          text="Login"
          bgColor="#cb4949"
          isLoading={isLoading}
        />
        <Link to="/signup">No account? Create one</Link>
      </Form>
    </>
  )
}

export default SignIn
