import produce from 'immer'
import authTypes from '../auth/types'
import types from './types'

const INITIAL_STATE = {
  me: null,
  isLoading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case authTypes.SIGN_IN_SUCCESS:
        draft.me = action.payload.user
        break
      case types.UPDATE_USER:
        draft.isLoading = true
        break
      case types.UPDATE_USER_SUCCESS:
        draft.me = action.payload.me
        draft.isLoading = false
        break
      case authTypes.LOGOFF:
        draft.me = null
        break
      default:
        draft.isLoading = false
    }
  })
}
