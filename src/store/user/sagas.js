import React from 'react'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { updateUserSuccess, updateUserFailure } from './actions'
import api from '../../services/api'
import types from './types'
import ErrorMessage from '../../components/ErrorMessage'

export function* updateUser({ payload }) {
  const {
    avatar,
    first_name,
    middle_name,
    last_name,
    email,
    ...rest
  } = payload.data
  const me = Object.assign(
    { avatar, first_name, middle_name, last_name, email },
    rest.oldPassword ? rest : {}
  )

  try {
    if (avatar) {
      const image = new FormData()
      image.append('file', avatar)
      yield call(api.post, 'users/avatar', image)
    }

    const response = yield call(api.put, 'users', me)
    toast.success('Your profile has been updated')
    yield put(updateUserSuccess(response.data.user))
  } catch ({ response: { data } }) {
    toast.error(<ErrorMessage errors={data} />, {
      autoClose: 2000,
    })
    yield put(updateUserFailure())
  }
}

export default all([takeLatest(types.UPDATE_USER, updateUser)])
