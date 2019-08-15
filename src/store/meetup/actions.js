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

const attendMeetup = id => ({
  type: types.ATTEND_MEETUP,
  payload: {
    id,
  },
})

const attendMeetupSuccess = () => ({
  type: types.ATTEND_MEETUP_SUCCESS,
})

const failure = () => ({
  type: types.FAILURE,
})

export {
  createMeetup,
  createMeetupSuccess,
  attendMeetup,
  attendMeetupSuccess,
  failure,
}
