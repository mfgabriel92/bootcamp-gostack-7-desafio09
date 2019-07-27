import { all } from 'redux-saga/effects'
import foo from './foo/sagas'

export default function* rootSaga() {
  return yield all([foo])
}
