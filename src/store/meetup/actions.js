import types from './types'

export function fetchMeetup(id) {
  return {
    type: types.FETCH_MEETUP,
    payload: {
      id,
    },
  }
}

export function fetchMeetupSuccess(meetup) {
  return {
    type: types.FETCH_MEETUP_SUCCESS,
    payload: {
      meetup,
    },
  }
}

export function createMeetup(title, description, date, location, banner) {
  return {
    type: types.CREATE_MEETUP,
    payload: {
      title,
      description,
      date,
      location,
      banner,
    },
  }
}

// export function createMeetupSuccess(meetup) {
//   return {
//     type: types.CREATE_MEETUP_SUCCESS,
//     payload: {
//       meetup,
//     },
//   }
// }

export function attendMeetup(id) {
  return {
    type: types.ATTEND_MEETUP,
    payload: {
      id,
    },
  }
}

// export function attendMeetupSuccess() {
//   return {
//     type: types.ATTEND_MEETUP_SUCCESS,
//   }
// }

export function cancelMeetup(id) {
  return {
    type: types.CANCEL_MEETUP,
    payload: {
      id,
    },
  }
}

// export function cancelMeetupSuccess() {
//   return {
//     type: types.CANCEL_MEETUP_SUCCESS,
//   }
// }

export function success() {
  return {
    type: types.SUCCESS,
  }
}

export function failure() {
  return {
    type: types.FAILURE,
  }
}
