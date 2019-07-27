import { put, all, takeLatest } from 'redux-saga/effects'
// import api from '../../services/api'
import { fooSuccess } from './actions'
import types from './types'

// export function setToken({ payload }) {
//   if (!payload) return

//   const { token } = payload.auth

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`
//   }
// }

export function* foo() {
  yield put(fooSuccess())
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.FOO, foo),
])
