import produce from 'immer'
import authTypes from '../auth/types'

const INITIAL_STATE = {
  me: null,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case authTypes.SIGN_IN_SUCCESS:
        draft.me = action.payload.user
        break
      case authTypes.LOGOFF:
        draft.me = null
        break
      default:
    }
  })
}
