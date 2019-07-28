import types from './types'

const signIn = (email, password) => {
  console.tron.log(email, password)
  return {
    type: types.SIGN_IN,
    payload: { email, password },
  }
}

const signInSuccess = (token, user) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: { token, user },
})

const failure = () => ({
  type: types.FAILURE,
})

export { signIn, signInSuccess, failure }
