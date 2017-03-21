import { ATTEMPT_LOGIN, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../assets/constants'

export function attemptLogin(form) {
  console.log('hit');
  return {
    type: ATTEMPT_LOGIN,
    form
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {}
