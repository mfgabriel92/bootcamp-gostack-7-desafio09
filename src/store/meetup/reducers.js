import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  meetup: null,
  isLoading: false,
}

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.CREATE_MEETUP || types.ATTEND_MEETUP || types.CANCEL_MEETUP:
        draft.isLoading = true
        break
      case types.CREATE_MEETUP_SUCCESS ||
        types.ATTEND_MEETUP_SUCCESS ||
        types.CANCEL_MEETUP_SUCCESS ||
        types.FAILURE:
        draft.isLoading = false
        break
      default:
        draft.isLoading = false
    }
  })
}
