import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  registerInProgress: [],
  registerSucceeded: ['userData'],
  registerFailed: ['error']
});

/* ------------- Reducer ------------- */

const INITIAL_STATE = Immutable({
  data: {
    name: 'deneme'
  },
  loading: false,
  error: true
});

const registerInProgress = (state, {}) => state.merge({
  data: {},
  loading: true,
  error: false
});

const registerSucceeded = (state, { userData }) => state.merge({
  data: userData,
  loading: false,
  error: false
});

const registerFailed = (state, { error }) => state.merge({
  loading: false,
  error
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_IN_PROGRESS]: registerInProgress,
  [Types.REGISTER_SUCCEEDED]: registerSucceeded,
  [Types.REGISTER_FAILED]: registerFailed,
});

export const UserTypes = Types;

export default Creators;
