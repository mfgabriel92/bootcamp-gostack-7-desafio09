import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'
import history from '../../services/history'
import { createMeetupSuccess, createMeetupFailure } from './actions'
import types from './types'

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location } = payload
    const { data } = yield call(api.post, '/meetups', {
      title,
      description,
      date,
      location,
    })

    yield put(createMeetupSuccess())

    toast.success(`Meetup ${data.meetup.title} successfully created`)
    history.push('/dashboard')
  } catch (e) {
    toast.error(e.response.data.error)
    yield put(createMeetupFailure())
  }
}

export default all([takeLatest(types.CREATE_MEETUP, createMeetup)])
