import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { UserTypes } from '../Redux/UserRedux'

/* ------------- Sagas ------------- */
import { register } from './UserSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.REGISTER_IN_PROGRESS, register),
  ])
}
