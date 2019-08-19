import React from 'react'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'
import history from '../../services/history'
import { fetchMeetupSuccess, success, failure } from './actions'
import types from './types'
import ErrorMessage from '../../components/ErrorMessage'

export function* fetchMeetup({ payload: { id } }) {
  try {
    const { data } = yield call(api.get, `meetups/${id}`)
    yield put(fetchMeetupSuccess(data.meetup))
  } catch ({ response: { data } }) {
    toast.error(<ErrorMessage errors={data} />, {
      autoClose: 2000,
    })
    yield put(failure())
  }
}

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, banner } = payload
    const { data } = yield call(api.post, '/meetups', {
      title,
      description,
      date,
      location,
    })

    yield put(success())

    if (banner) {
      const image = new FormData()
      image.append('file', banner)
      yield call(api.put, `/meetups/${data.meetup.id}/banner`, image)
    }

    toast.success(`Meetup "${data.meetup.title}" successfully created`)
    history.push('/dashboard')
  } catch ({ response: { data } }) {
    toast.error(<ErrorMessage errors={data} />, {
      autoClose: 2000,
    })
    yield put(failure())
  }
}

export function* attendMeetup({ payload: { id } }) {
  try {
    yield call(api.post, `/meetups/${id}/attend`)
    yield put(success())

    toast.success(`You have joined the meet-up`)
    history.push('/meetups/attending')
  } catch ({ response: { data } }) {
    toast.error(<ErrorMessage errors={data} />, {
      autoClose: 2000,
    })
    yield put(failure())
  }
}

export function* cancelMeetup({ payload: { id } }) {
  try {
    yield call(api.delete, `/meetups/${id}`)
    yield put(success())

    toast.success(`You have canceled your meet-up`)
    history.push('/meetups/my')
  } catch ({ response: { data } }) {
    toast.error(<ErrorMessage errors={data} />, {
      autoClose: 2000,
    })
    yield put(failure())
  }
}

export default all([
  takeLatest(types.FETCH_MEETUP, fetchMeetup),
  takeLatest(types.CREATE_MEETUP, createMeetup),
  takeLatest(types.ATTEND_MEETUP, attendMeetup),
  takeLatest(types.CANCEL_MEETUP, cancelMeetup),
])
