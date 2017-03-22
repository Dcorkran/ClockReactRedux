import { ATTEMPT_LOGIN,ATTEMPT_LOGIN_SUCCESS, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../assets/constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  form: {},
  token:{},
  user:{},
  isLoggedIn:false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return Object.assign({},state,{
        form: action.form
      })
    case ATTEMPT_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
