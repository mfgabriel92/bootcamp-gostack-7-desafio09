import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  FaUserAlt,
  FaEnvelopeOpen,
  FaUnlockAlt,
  FaCheckCircle,
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Form } from '@rocketseat/unform'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import Dropzone from '../../components/Dropzone'
import { updateUser } from '../../store/user/actions'
import { Container } from './styles'
import schema from '../../utils/validations/user'

function Profile() {
  const [changed, setChanged] = useState(false)
  const [avatar, setAvatar] = useState([])
  const me = useSelector(state => state.user.me)
  const { isLoading } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    setChanged(true)
  }, [avatar])

  async function validateForm(form) {
    if (!changed) return

    try {
      await schema.validate(form, { abortEarly: false })
      const data = Object.assign(form, { avatar: avatar[0] })

      dispatch(updateUser(data))
    } catch ({ errors }) {
      toast.error(<ErrorMessage errors={errors} />, { autoClose: 2000 })
    } finally {
      setChanged(false)
    }
  }

  return (
    <Container>
      <h1>
        My <span>Profile</span>
      </h1>
      <Form initialData={me} onSubmit={validateForm}>
        <h3>Change info</h3>
        <Dropzone
          type="avatar"
          accept="image/*"
          onDropAccepted={setAvatar}
          banner={me.avatar && me.avatar.path}
        />
        <Input
          icon={FaUserAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="first_name"
          placeholder="John"
          onChange={() => setChanged(true)}
        />
        <Input
          icon={FaUserAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="middle_name"
          placeholder="J."
          onChange={() => setChanged(true)}
        />
        <Input
          icon={FaUserAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="last_name"
          placeholder="Doe"
          onChange={() => setChanged(true)}
        />
        <Input
          icon={FaEnvelopeOpen}
          iconColor="#2d3450"
          iconSize={18}
          name="email"
          type="email"
          placeholder="example@email.com"
          onChange={() => setChanged(true)}
        />
        <h3>Change password</h3>
        <Input
          icon={FaUnlockAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="oldPassword"
          type="password"
          placeholder="Old password"
          onChange={() => setChanged(true)}
        />
        <Input
          icon={FaUnlockAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="password"
          type="password"
          placeholder="New password"
          onChange={() => setChanged(true)}
        />
        <Input
          icon={FaUnlockAlt}
          iconColor="#2d3450"
          iconSize={18}
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          onChange={() => setChanged(true)}
        />
        <Button
          icon={FaCheckCircle}
          iconSize={18}
          text="Update"
          isLoading={isLoading}
        />
      </Form>
    </Container>
  )
}

export default Profile
