import types from './types'

const createMeetup = (title, description, date, location, banner) => ({
  type: types.CREATE_MEETUP,
  payload: {
    title,
    description,
    date,
    location,
    banner,
  },
})

const createMeetupSuccess = meetup => ({
  type: types.CREATE_MEETUP_SUCCESS,
  payload: {
    meetup,
  },
})

const createMeetupFailure = () => ({
  type: types.CREATE_MEETUP_FAILURE,
})

export { createMeetup, createMeetupSuccess, createMeetupFailure }
