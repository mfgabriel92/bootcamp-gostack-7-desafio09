import React from 'react'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'
import history from '../../services/history'
import { createMeetupSuccess, createMeetupFailure } from './actions'
import types from './types'
import ErrorMessage from '../../components/ErrorMessage'

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, banner } = payload
    const { data } = yield call(api.post, '/meetups', {
      title,
      description,
      date,
      location,
    })

    yield put(createMeetupSuccess())

    if (banner) {
      const image = new FormData()
      image.append('file', banner)

      yield call(api.put, `/meetups/${data.meetup.id}/banner`, image)
    }

    toast.success(`Meetup ${data.meetup.title} successfully created`)
    history.push('/dashboard')
  } catch ({ response: { data } }) {
    toast.error(<ErrorMessage errors={data} />, {
      autoClose: 2000,
    })
    yield put(createMeetupFailure())
  }
}

export default all([takeLatest(types.CREATE_MEETUP, createMeetup)])
