import { put, call } from 'redux-saga/effects'
import auth from '@react-native-firebase/auth';

import UserActions from '../../Redux/UserRedux'

export function* register(action) {
  console.log(action, 'register basti')
  const { email, password } = action

  const response = auth().createUserWithEmailAndPassword(email, password)
  try {
    console.log(response, 'User account created & signed in!');
    yield put(UserActions.registerSucceeded())
  } catch (error) {
    yield put(UserActions.registerFailed())
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  }
}

export function* login(action) {
  console.log(action, 'login basti')
  const { email, password } = action

  const response = auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response, 'login basarili')
    }).catch(e => {
      console.log(e, 'hatali')
    })

  try {
    console.log(response, 'User account created & signed in!');
    yield put(UserActions.loginSucceeded())
  } catch (error) {
    yield put(UserActions.loginFailed())
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  }
}
