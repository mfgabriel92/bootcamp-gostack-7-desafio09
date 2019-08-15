import types from './types'

const signIn = (email, password) => {
  return {
    type: types.SIGN_IN,
    payload: { email, password },
  }
}

const signInSuccess = (token, user) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: { token, user },
})

const logoff = () => ({
  type: types.LOGOFF,
})

const failure = () => ({
  type: types.FAILURE,
})

export { signIn, signInSuccess, logoff, failure }
