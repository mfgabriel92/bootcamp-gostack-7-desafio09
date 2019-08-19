import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  meetup: null,
  isLoading: false,
}

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.FETCH_MEETUP ||
        types.CREATE_UPDATE_MEETUP ||
        types.ATTEND_MEETUP ||
        types.CANCEL_MEETUP:
        draft.isLoading = true
        break
      case types.FETCH_MEETUP_SUCCESS:
        draft.meetup = action.payload.meetup
        draft.isLoading = false
        break
      case types.SUCCESS:
        draft.isLoading = false
        break
      default:
        draft.isLoading = false
    }
  })
}
