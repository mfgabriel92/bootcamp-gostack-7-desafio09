import types from './types'

export function foo() {
  return {
    type: types.FOO,
  }
}

export function fooSuccess() {
  return {
    type: types.FOO_SUCCESS,
  }
}
