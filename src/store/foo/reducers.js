import produce from 'immer'
import types from './types'

const INITIAL_STATE = {}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.FOO:
        draft.foo = 'bar'
        break
      default:
    }
  })
}
