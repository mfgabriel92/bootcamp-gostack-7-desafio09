import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'
import history from '../../services/history'
import { signInSuccess, failure } from './actions'
import types from './types'

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const { data } = yield call(api.post, '/auth', { email, password })
    const { token, user } = data
    yield put(signInSuccess(token, user))

    api.defaults.headers.Authorization = `Bearer ${token}`

    toast.success(`Welcome, ${user.first_name}`)
    history.push('/dashboard')
  } catch (e) {
    toast.error('Credentials do not match')
    yield put(failure())
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.SIGN_IN, signIn),
])
