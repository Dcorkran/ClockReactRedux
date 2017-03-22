import { ATTEMPT_LOGIN, ATTEMPT_LOGIN_SUCCESS, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../assets/constants'
import Api from '../api/api'
export function attemptLogin(form) {
  console.log('hit');
  // return {
  //   type: ATTEMPT_LOGIN,
  //   form
  // }
  return function(dispatch) {
    // dispatch(beginAjaxCall());
    return Api.getUser(form).then(data => {
      console.log(data);
      if (data.user.id) {
        dispatch(attemptLoginSuccess(data.user));
      } else {
        // dispatch(loadCoursesSuccess(user));
        console.log('fail...');
      }
      // dispatch(loadCoursesSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
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

export function attemptLoginSuccess(user) {
  return {type: ATTEMPT_LOGIN_SUCCESS, user}
}
