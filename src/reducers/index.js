// reducers

import {combineReducers} from 'redux'

import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postsReducer,  // this is state for the whole app
  users: usersReducer
})