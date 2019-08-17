import types from './types'

export function signIn(email, password) {
  return {
    type: types.SIGN_IN,
    payload: { email, password },
  }
}

export function signInSuccess(token, user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token, user },
  }
}

export function signUp({ first_name, last_name, email, password }) {
  return {
    type: types.SIGN_UP,
    payload: { first_name, last_name, email, password },
  }
}

export function signUpSuccess(user) {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: { user },
  }
}

export function logoff() {
  return {
    type: types.LOGOFF,
  }
}

export function failure() {
  return {
    type: types.FAILURE,
  }
}
